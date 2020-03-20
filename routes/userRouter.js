const router = require('express').Router()
const Controller = require('../controllers/userController')
const { historyController } = require('../controllers')

router.post('/login', Controller.login)
router.post('/register', Controller.register)
router.post('/history', historyController.addHistory)

module.exports = router