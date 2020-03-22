const axios = require('axios')

class GithubController {
  static async getToken (req, res, next) {
    const { client_id, client_secret, code } = req.body
    console.log(req.body, '============================')
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
      console.log(response, 'masuk', '==============================')
      res.status(200).json({response})
    }
    catch(err) {
      next(err)
    }
  }

  static async getUser (req, res, next) {
    // const code = req.query.code
    const token = req.headers.Authorization
    try {
      let response = await axios({
        method: 'GET',
        url: 'https://api.github.com/user',
        headers: {
          Authorization: token
        }
      })
      res.status(200).json({response})
    }
    catch(err) {
      next(err)
    }
  }
}

module.exports = GithubController