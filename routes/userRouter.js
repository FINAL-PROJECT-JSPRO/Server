const router = require('express').Router()
const Controller = require('../controllers/userController')
const { historyController } = require('../controllers')
const authentication = require('../middlewares/authentication')

router.post('/login', Controller.login)
router.post('/register', Controller.register)
router.post('/history', authentication, historyController.addHistory)
router.put('/history', authentication, historyController.updateHistory)

module.exports = router