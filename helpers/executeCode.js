const vm = require('vm')
const transpile = require('./transpile')

module.exports = (str, params) => {
  let code = ''
  
  let firstString = ''
  for (let i = 0; i <5; i++) {
    firstString += str[i]
  }

  if (firstString === 'const') {
    transpiledStr = transpile(str)
    for (let i = 4; i < transpiledStr.length; i++) {
      if (i !== transpiledStr.length - 1) {
        code += transpiledStr[i]
      } else if (i === transpiledStr && transpiledStr[i] !== ';') {
        code += transpiledStr[i]
      }
    }
  } else {
    code = str
  }

  const result = {
    success: null,
    error: {}
  }
  try {
    result.success = vm.runInNewContext("("+code+")"+"("+params+")")
    result.answerType = typeof result.success
  } catch (error) {
      result.error.name = error.name
      result.error.message = error.message
  }
  return result
}