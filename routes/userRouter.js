const router = require('express').Router()
const multer = require('multer')
const {
  historyController,
  userController,
  googleController,
  userSubjectController
} = require('../controllers')
const authentication = require('../middlewares/authentication')
const s3upload = require('../middlewares/s3upload')

router.post('/login', userController.login)
router.post('/register', userController.register)
router.get('/', authentication, userController.findOne)
router.post('/gSignIn', googleController.signInGoogle)
router.post('/history', authentication, historyController.addHistory)
router.put('/history', authentication, historyController.updateHistory)
router.put('/', authentication, userController.editProfile)
router.get('/subjectHistory', authentication, userSubjectController.getAllUserSubject)
router.patch('/subjectHistory/:id', authentication, userSubjectController.updateUserSubject)
router
  .route('/photoUpload')
  .patch(multer({ dest: 'temp/', limits: { fieldSize: 3 * 1024 * 1024 } }).single('image'), authentication, s3upload, userController.photoUpload)


module.exports = router