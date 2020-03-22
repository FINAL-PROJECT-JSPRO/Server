const router = require('express').Router()
const { chapterController } = require('../controllers')
const authentication = require('../middlewares/authentication')

router.get('/', authentication, chapterController.getAllChapter)
router.get('/:id', authentication, chapterController.getOneChapter)

module.exports = router