const router = require('express').Router()
const authentication = require('../middlewares/authentication')
const { repositoryController } = require('../controllers')

router.post('/', authentication, repositoryController.createRepository)
router.get('/', authentication, repositoryController.getRepositories)
module.exports = router