const { Exam, Subject } = require('../models')

module.exports = {
  getAllExam(req, res, next) {
    Exam.findAll()
      .then(exams => {
        res
          .status(200)
          .json(exams)
      })
      .catch(next)
  },

  getOneExam(req, res, next) {
    const { id } = req.params
    Exam.findOne({ where: { id }, include: Subject })
      .then(exam => {
        res
          .status(200)
          .json(exam)
      })
      .catch(next)
  }
}