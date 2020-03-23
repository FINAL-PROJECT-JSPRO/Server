const axios = require('axios')
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
}

module.exports = GithubController