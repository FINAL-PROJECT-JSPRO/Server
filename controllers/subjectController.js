const { Subject } = require('../models')

module.exports = {
  getAllSubject(req, res, next) {
    Subject.findAll()
      .then(subjects => {
        res
          .status(200)
          .json(subjects)
      })
      .catch(next)
  }
}