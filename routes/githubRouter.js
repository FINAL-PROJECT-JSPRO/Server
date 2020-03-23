const router = require('express').Router()
const { githubController } = require('../controllers')

router.post('/token', githubController.getToken)
router.post('/profile', githubController.getUser)
router.post('/login', githubController.login)
module.exports = router