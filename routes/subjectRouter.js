const router = require('express').Router()
const { subjectController } = require('../controllers')
const authentication = require('../middlewares/authentication')

router.get('/', authentication, subjectController.getAllChapter)
router.get('/:id', subjectController.getOneChapter)

module.exports = router