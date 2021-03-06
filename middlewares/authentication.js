const { User, History } = require('../models')
const { verify } = require('../helpers/jwt')

module.exports = (req, res, next) => {
  const token = req.headers.access_token
  if (token) {
    try {
      const auth = verify(token)
      if (auth) {
        User.findOne({ where: { id: auth.id }, include: History })
          .then(user => {
            if (user) {
              req.currentUserId = user.id
              req.userHistories = user.Histories
              next()
            } else {
              next({ type: "banned" })
            }
          })
      } else {
        next({ type: 'notlogin' })
      }
    }
    catch (err) {
      next(err)
    }
  } else {
    next({ type: "notlogin" })
  }
}