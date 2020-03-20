const router = require('express').Router()
const userRouter = require('./userRouter')
const examRouter = require('./examRouter')
const subjectRouter = require('./subjectRouter')
const levelRouter = require('./levelRouter')

router.use('/', userRouter)
router.use('/exams', examRouter)
router.use('/subjects', subjectRouter)
router.use('/levels', levelRouter)

module.exports = router