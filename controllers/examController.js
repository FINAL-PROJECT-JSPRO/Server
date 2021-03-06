const { Exam, Subject, Chapter } = require('../models')

module.exports = {
  getAllExam(req, res, next) {
    Exam.findAll({ include: Subject })
      .then(exams => {
        res
          .status(200)
          .json(exams)
      })
      .catch(next)
  },

  getOneExam(req, res, next) {
    const { id } = req.params
    Exam.findOne({ where: { id },
      include: [{
        model: Subject,
        include: [Chapter]
      }]
    })
      .then(exam => {
        res
          .status(200)
          .json(exam)
      })
      .catch(next)
  }
}
