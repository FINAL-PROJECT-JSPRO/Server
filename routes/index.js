const router = require('express').Router()
const userRouter = require('./userRouter')
const examRouter = require('./examRouter')
const subjectRouter = require('./subjectRouter')

router.use('/', userRouter)
router.use('/exams', examRouter)
router.use('/subjects', subjectRouter)

module.exports = router