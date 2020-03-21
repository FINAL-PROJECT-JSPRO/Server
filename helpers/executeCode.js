module.exports = str => {
  const result = {
    success: '',
    error: ''
  }
  try {
    const newFunction = new Function(str)
    result.success = newFunction()
  } catch (error) {
    result.error = error
  }
  return result
}