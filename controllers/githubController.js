const axios = require('axios')
const fs = require('fs')
const { User } = require('../models')
const { sign } = require('../helpers/jwt')

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
      res.status(200).json({
        access_token
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
        url: 'https://api.github.com/user',
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

  static async saveToGithubRepository (req, res, next) {
    try {
    const access_token =  req.headers.access_token
    const {
      repositoryName,
      fileName,
      description,
      script,
      message } = req.body
      let response = await axios({
        method: 'GET',
        url: 'https://api.github.com/user',
        headers: {
          Authorization: 'token '+ access_token
        }
      })

      const file = fs.appendFileSync('files/'+ response.data.login +'/' + fileName, script , { encoding:'base64'})
      // console.log(file)

      // fs.writeFile('files/script.js', 'function hello ()', (err) => {
      //   if (err) throw err
      //   console.log('File is created successfully.');
      // })
      response = await axios({
        method: 'POST',
        url: 'https://api.github.com/user/repos',
        headers: {
          Authorization: 'token ' + access_token,
          'Content-Type': 'application/json'
        },
        data: {
          name: repositoryName,
          description,
          private: false
        }
      })

      const owner = response.data.owner.login

      response = await axios({
        method: 'PUT',
        url: 'https://api.github.com/repos/'+owner+'/'+repositoryName+'/contents/'+fileName,
        headers: {
          Authorization: 'token ' + access_token,
          'Content-Type': 'application/json'
        },
        data: {
          message,
          content: file
        }
      })
      fs.unlink('files/'+ response.data.login +'/' + fileName, function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });
      res.status(201).json(response.data)
    } catch (error) {
      next(error)
    }
  }

}

module.exports = GithubController