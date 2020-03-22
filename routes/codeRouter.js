const router = require('express').Router()
const { codeController } = require('../controllers')

router.post('/sandbox', codeController.sandboxExecution)
router.post('/exam/:id', codeController.answerCheck)

module.exports = router