const axios = require('axios')
const fs = require('fs')
const { User } = require('../models')
const { sign } = require('../helpers/jwt')
const { Buffer } = require('buffer')

class GithubController {
  static async getToken (req, res, next) {
    const { client_id, client_secret, code } = req.body
    try {
      let response = await axios({
        method: 'POST',
        url: 'https://github.com/login/oauth/access_token',
        data: {
          client_id,
          client_secret,
          code
        }
      })
      const access_token = response.data.split('&')[0].split('=')[1]
      const githubToken = sign({ githubToken: access_token })
      
      res.status(200).json({
        access_token,
        githubToken
      })
    }
    catch(err) {
      next(err)
    }
  }

  static async getUser (req, res, next) {
    const token = req.headers.access_token

    try {
      let response = await axios({
        method: 'GET',
        url: process.env.GITHUBAPI_BASEURL + 'user',
        headers: {
          Authorization: 'token '+ token
        }
      })
      res.status(200).json({
        profile: response.data
      })
    }
    catch(err) {
      next(err)
    }
  }

  static login(req, res, next) {
    const { payload } = req.body
    User.findOne({
      where: {
        email: payload.email
      }
    })
    .then(user => {
      if (user) {
      return user
      } else {
        return User.create({
          username: payload.login,
          email: payload.email,
          name: payload.name,
          password: process.env.SECRET_PASSWORD_GITHUB
        })
      }
    })
    .then(user => {
        const token = sign({
          id: user.id,
          email: user.email
        })
        res.status(200).json({
          msg: "Login Success",
          token
      })
    })
    .catch(err => next(err))
  }

  static async getRepositoryToken (req, res, next) {
    try {
      const { client_secret, client_id , code } = req.body
      let { data } = await axios({
        method: 'POST',
        url: 'https://github.com/login/oauth/access_token',
        data: {
          client_id,
          client_secret,
          code
        }
      })
      const token = data.split('&')[0].split('=')[1]
      res.status(200).json({
        token
      })
    } catch (error) {
      next(error)
    }
  }

  static addToRepo(req, res, next) {
    // const token = req.headers.access_token
    const token = req.githubToken
    const { repoName, fileName, code, description } = req.body

    axios({
      method: 'post',
      url: process.env.GITHUBAPI_BASEURL + 'user/repos',
      data: {
        name: repoName,
        description
      },
      headers: {
        Authorization: 'token '+ token
      }
    })
      .then(({data: createdRepo}) => {
        return createdRepo
      })
      .then(createdRepo => {
        const {full_name} = createdRepo
        const encodedCode = Buffer.from(code).toString('base64')
        return axios({
          method: 'put',
          url: process.env.GITHUBAPI_BASEURL + 'repos/' + full_name + '/contents/' + fileName,
          data: {
            message: "Auto-generated message from JSPro",
            committer: {
              name: "JSPro",
              email: "jsproteam@github.com"
            },
            content: encodedCode
          },
          headers: {
            Authorization: 'token '+ token
          }
        })
      })
      .then(({data}) => {
        const { content } = data
        res
          .status(201)
          .json(content)
      })
      .catch(next)
  }
}

module.exports = GithubController