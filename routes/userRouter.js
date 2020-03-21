const router = require('express').Router()
const Controller = require('../controllers/userController')
const GoogleController = require('../controllers/googleController')
const { historyController } = require('../controllers')

router.post('/login', Controller.login)
router.post('/register', Controller.register)
router.post('/history', historyController.addHistory)
router.post('/gSignIn', GoogleController.signInGoogle)

module.exports = router