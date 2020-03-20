const { Chapter } = require('../models')

module.exports = {
  getAllChapter(req, res) {
    Chapter.findAll()
      .then(chapters => {
        res
          .status(200)
          .json(chapters)
      })
      .catch(console.log)
  },

  getOneChapter(req, res, next) {
    const { id } = req.params
    Chapter.findOne({ where: { id } })
      .then(chapter => {
        res
          .status(200)
          .json(chapter)
      })
      .catch(console.log)
  }
}