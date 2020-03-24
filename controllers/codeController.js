const { executeCode, executeSandbox } = require('../helpers/executeCode')
const assert = require('assert')
const {
  firstParams, firstAnswer,
  secondParams, secondAnswer,
  thirdParams, thirdAnswer,
  fourthParams, fourthAnswer,
  fifthParams, fifthAnswer,
  sixthParams, sixthAnswer,
  seventhParams, seventhAnswer,
  eightParams, eightAnswer,
  ninthParams, ninthAnswer
} = require('../helpers/testCase')

module.exports = {
  sandboxExecution(req, res, next) {
    const { code } = req.body
    const result = executeSandbox(code)
    res
      .status(200)
      .json(result)
  },

  answerCheck(req, res, next) {
    const { code } = req.body
    const { id } = req.params
    let answers = []
    let params = []

    switch(id) {
      case "1":
        params = firstParams
        answers = firstAnswer
        break
      case "2":
        params = secondParams
        answers = secondAnswer
        break
      case "3":
        params = thirdParams
        answers = thirdAnswer
        break
      case "4":
          params = fourthParams
          answers = fourthAnswer
          break 
      case "5":
        params = fifthParams
        answers = fifthAnswer
        break
      case "6":
        params = sixthParams
        answers = sixthAnswer
        break
      case "7":
        params = seventhParams
        answers = seventhAnswer
        break
      case "8":
        params = eightParams
        answers = eightAnswer
        break
      case "9":
        params = ninthParams
        answers = ninthAnswer
        break
    }

    let correctAnswer = true
    let errorCatcher = {}
    params.forEach ((param, index) => {
      const { success, error } = executeCode(code, param)
      if (success) {
            try {
              assert.strictEqual(String(success), String(answers[index]))
            } catch (notEqual) {
              correctAnswer = false
              errorCatcher = notEqual
            }
      } else {
        correctAnswer = false
        errorCatcher = error
      }
    })
    if (correctAnswer) {
      res
      .status(200)
      .json({msg: "Your answer is correct"})
    } else {
      if (errorCatcher.name) {
        next({type: 'codeError', error: errorCatcher})
      }
      else next({type: 'wronganswer'})
    }
  }
}