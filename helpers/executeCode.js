const vm = require('vm')

module.exports = str => {
  const result = {
    success: null,
    error: {}
  }
  try {
    result.success = vm.runInNewContext(str)
    result.answerType = typeof result.success
  } catch (error) {
      result.error.name = error.name
      result.error.message = error.message
  }
  return result
}