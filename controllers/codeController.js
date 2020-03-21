const executeCode = require('../helpers/executeCode')

module.exports = {
  sandboxExecution(req, res, next) {
    const { code } = req.body
    const result = executeCode(code)
    res
      .status(200)
      .json(result)
  }
}