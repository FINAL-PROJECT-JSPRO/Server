const router = require('express').Router()
const { subjectController } = require('../controllers')

router.get('/', subjectController.getAllChapter)
router.get('/:id', subjectController.getOneChapter)

module.exports = router