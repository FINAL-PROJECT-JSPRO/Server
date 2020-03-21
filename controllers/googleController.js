const { User } = require('../models')
const { sign } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

class GoogleController {
  static signInGoogle (req, res, next) {
    let email
    let username
    client.verifyIdToken({
       idToken: req.headers.idtoken,
       audience: process.env.CLIENT_ID
    })
       .then(data => {
          console.log(data)
          console.log('masuk signIn Controller')
          email = data.payload.email
          username = data.payload.email
          return User.findOne({
             where : {
                email
             }
          })
       })
       .then(user => {
          console.log(user, 'masuk signIn Controller 2')
          if(!user) {
             let newUser = {
                username, email, password: process.env.SECRET_PASSWORD
             }
                return User.create(newUser)
          } else {
             return user
          }
       })
       .then(userLogin => {
          // console.log(userLogin)
          let token = sign({ id: userLogin.id, email })
          console.log('masuk signIn COntroller 3')
          // console.log(token)
          res.status(200).json({
             token
          })
       })
       .catch(next)
 }
}

module.exports = GoogleController