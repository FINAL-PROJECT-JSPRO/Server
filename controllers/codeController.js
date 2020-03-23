const executeCode = require('../helpers/executeCode')
const { Exam } = require('../models')

module.exports = {
  sandboxExecution(req, res, next) {
    const { code } = req.body
    // console.log(typeof(code), code, 'dari controller')
    const result = executeCode(code)
    res
      .status(200)
      .json(result)
  },

  answerCheck(req, res, next) {
    const { code } = req.body
    const { id } = req.params
    const { success, error } = executeCode(code)
    console.log({success, error})
    if (success) {
      Exam.findOne({ where: { id } })
        .then(exam => {
          const stringify = String(success)
          console.log('ini jawaban user', String(success))
          console.log('ini jawaban di database', exam.answer)
          console.log(stringify === exam.answer)
          if (stringify === exam.answer) {
            res
              .status(200)
              .json({msg: "Your answer is correct"})
          } else {
            next({type: 'wronganswer'})
          }
        })
        .catch(next)
    } else {
      next({type: 'codeError', error})
    }
  }
}