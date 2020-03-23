const { Subject, Chapter } = require('../models')

module.exports = {
  getAllSubject(req, res, next) {
    Subject.findAll({
      include: [Chapter]
    })
      .then(subjects => {
        res
          .status(200)
          .json(subjects)
      })
      .catch(next)
  }
}
