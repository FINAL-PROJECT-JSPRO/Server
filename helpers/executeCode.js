const vm = require('vm')

module.exports = str => {
  const result = {
    success: null,
    error: {}
  }
  try {
    console.log(typeof(str), '=====\n', str, 'dari helpers')
    result.success = vm.runInNewContext(str)
    result.answerType = typeof result.success
    console.log(result)
  } catch (error) {
      result.error.name = error.name
      result.error.message = error.message
  }
  return result
}