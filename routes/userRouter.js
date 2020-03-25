const router = require('express').Router()
const {
  historyController,
  userController,
  googleController,
  userSubjectController
} = require('../controllers')
const authentication = require('../middlewares/authentication')

router.post('/login', userController.login)
router.post('/register', userController.register)
router.get('/', authentication, userController.findOne)
router.post('/gSignIn', googleController.signInGoogle)
router.post('/history', authentication, historyController.addHistory)
router.put('/history', authentication, historyController.updateHistory)
router.put('/', authentication, userController.editProfile)
router.get('/subjectHistory', authentication, userSubjectController.getAllUserSubject)
router.patch('/subjectHistory/:id', authentication, userSubjectController.updateUserSubject)


module.exports = router