const { Subject, Chapter } = require('../models')
const { getCache, setCache } = require('../helpers/redisCaching')

module.exports = {
  getAllSubject(req, res, next) {
    getCache('subjects')
      .then(result => {
        if (result) {
          return JSON.parse(result)
        } else {
          return Subject.findAll({
            order: [['id']],
            include: [Chapter]
          })
        }
      })
      .then(subjects => {
        setCache('subjects', subjects)
        res
          .status(200)
          .json(subjects)
      })
      .catch(next)
  }
}
