const router = require('express').Router()
const { examController } = require('../controllers')
const authentication = require('../middlewares/authentication')

router.get('/', examController.getAllExam)
router.get('/:id', examController.getOneExam)

module.exports = router