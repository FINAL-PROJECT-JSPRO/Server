const router = require('express').Router()
const { codeController } = require('../controllers')

router.post('/sandbox', codeController.sandboxExecution)

module.exports = router