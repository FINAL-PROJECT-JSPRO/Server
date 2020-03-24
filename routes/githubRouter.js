const router = require('express').Router()
const { githubController } = require('../controllers')
const githubToken = require('../middlewares/githubToken')

router.post('/token', githubController.getToken)
router.post('/profile', githubController.getUser)
router.post('/login', githubController.login)
router.post('/repository/token', githubController.getRepositoryToken)
// router.post('/repository', githubController.saveToGithubRepository)
router.post('/addtorepo', githubToken, githubController.addToRepo)
module.exports = router