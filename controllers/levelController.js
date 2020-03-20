const { Level } = require('../models')

module.exports = {
  getAllLevel(req, res, next) {
    Level.findAll({})
    .then(levels => {
      res.status(200).json(levels)
    })
    .catch(err => next(err))
  }
}