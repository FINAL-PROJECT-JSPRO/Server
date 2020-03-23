const router = require('express').Router()
const { subjectController } = require('../controllers')
// const authentication = require('../middlewares/authentication')

router.get('/', subjectController.getAllSubject)

module.exports = router
