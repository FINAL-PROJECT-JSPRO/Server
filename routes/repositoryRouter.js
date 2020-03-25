const router = require('express').Router()
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const { repositoryController } = require('../controllers')

router.post('/', authentication, repositoryController.createRepository)
router.get('/', authentication, repositoryController.getRepositories)
router.post('/validate', authentication, repositoryController.validateRepository)
module.exports = router