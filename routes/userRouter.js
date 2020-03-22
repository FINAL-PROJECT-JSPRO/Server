const router = require('express').Router()
const { historyController, userController, googleController } = require('../controllers')
const authentication = require('../middlewares/authentication')

router.post('/login', userController.login)
router.post('/register', userController.register)
router.post('/verify', authentication, userController.findOne)
router.post('/gSignIn', googleController.signInGoogle)
router.post('/history', authentication, historyController.addHistory)
router.put('/history', authentication, historyController.updateHistory)
router.put('/profile', authentication, userController.editProfile)

module.exports = router