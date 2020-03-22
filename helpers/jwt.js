const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

module.exports = {
  sign(payload) {
    return jwt.sign(payload, process.env.SECRET)
  },

  verify(token) {
    return jwt.verify(token, process.env.SECRET)
  }
}