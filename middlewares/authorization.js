const { Repository } = require('../models')

module.exports = (req, res, next) => {
  const id = +req.params.id
  const user_id = req.currentUserId
  Repository.findOne({
    where: {
      id
    }
  })
    .then(repository => {
      if (repository) {
        if (repository.UserId === user_id) {
          next()
        } else {
          next({
            status: 401,
            msg: 'You are not authorized'
          })
        }
      } else {
        next({
          status: 404,
          msg: 'Repository is not found with id ' + id
        })
      }
    })
    .catch(err => {
      next(err)
    })
}