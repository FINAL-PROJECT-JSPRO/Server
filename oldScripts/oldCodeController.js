const executeCode = require('../helpers/executeCode')
const { Exam } = require('../models')
const assert = require('assert')
const executeCode3 = require('../helpers/executeCode3')

module.exports = {
  sandboxExecution(req, res, next) {
    const { code } = req.body
    const result = executeCode(code)
    res
      .status(200)
      .json(result)
  },

  // answerCheck(req, res, next) {
  //   console.log('ini tes', fifth)
  //   const { code } = req.body
  //   const { id } = req.params
  //   const { success, error } = executeCode(code)
  //   console.log('di code controller', {success, error})
  //   if (success) {
  //     Exam.findOne({ where: { id } })
  //       .then(exam => {
  //         const stringify = String(success)
  //         console.log('ini jawaban user', success)
  //         console.log('ini jawaban di database', exam.answer)
  //         console.log(stringify === exam.answer)
  //         // if (stringify === exam.answer) {
  //         //   res
  //         //     .status(200)
  //         //     .json({msg: "Your answer is correct"})
  //         // } else {
  //         //   next({type: 'wronganswer'})
  //         // }
  //       })
  //       .catch(next)
  //   } else {
  //     next({type: 'codeError', error})
  //   }
  // },

  // answerCheck(req, res, next) {
  //   const { code } = req.body
  //   const { id } = req.params
  //   const { success, error } = executeCode(code)
  //   if (success) {
  //     Exam.findOne({ where: { id } })
  //       .then(exam => {
  //         const answer = exam.answer
  //         console.log(answer)
  //         try {
  //           assert.strictEqual(String(success), answer)
  //           res
  //             .status(200)
  //             .json({msg: "Your answer is correct"})
  //         } catch (error) {
  //           next({type: 'wronganswer'})
  //         }
  //       })
  //       .catch(next)
  //   } else {
  //     next({type: 'codeError', error})
  //   }
  // }

  answerCheck(req, res, next) {
    const { code } = req.body
    const { id } = req.params
    const params = ["\[\"HACK:SIA\", \"VA:DO\", \"IN:TE\", \"NE:TI\"\]"]
    // const { success, error } = executeCode2(code, params[0])
    const { success, error } = executeCode3(code, params[0])
    if (success) {
      Exam.findOne({ where: { id } })
        .then(exam => {
          const answer = exam.answer
          console.log(answer)
          try {
            assert.strictEqual(String(success), answer)
            res
              .status(200)
              .json({msg: "Your answer is correct"})
          } catch (error) {
            next({type: 'wronganswer'})
          }
        })
        .catch(next)
    } else {
      next({type: 'codeError', error})
    }
  }
}