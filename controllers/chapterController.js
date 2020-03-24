const { Chapter } = require('../models')
const { getCache, setCache } = require('../helpers/redisCaching')

module.exports = {
  getAllChapter(req, res, next) {
    getCache('chapters')
      .then(result => {
        if (result) {
          return JSON.parse(result)
        } else {
          return Chapter.findAll()
        }
      })
      .then(chapters => {
        setCache('chapters', chapters)
        res
          .status(200)
          .json(chapters)
      })
      .catch(next)
  },

  getOneChapter(req, res, next) {
    const { id } = req.params
    getCache('chapter_'+ id)
      .then(result => {
        if (result) {
          return JSON.parse(result)
        } else {
          return Chapter.findOne({ where: { id } })
        }
      })
      .then(chapter => {
        setCache('chapter_' + id, chapter)
        res
          .status(200)
          .json(chapter)
      })
      .catch(next)
  }
}