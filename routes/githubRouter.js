const router = require('express').Router()
const { githubController } = require('../controllers')

router.post('/token', githubController.getToken)
router.post('/profile', githubController.getUser)
router.post('/login', githubController.login)
router.post('/repository/token', githubController.getRepositoryToken)
router.post('/addtorepo', githubController.addToRepo)
module.exports = router