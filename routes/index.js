const router = require('express').Router()
const userRouter = require('./userRouter')
const examRouter = require('./examRouter')
const subjectRouter = require('./subjectRouter')
const levelRouter = require('./levelRouter')
const codeRouter = require('./codeRouter')

router.use('/users', userRouter)
router.use('/exams', examRouter)
router.use('/subjects', subjectRouter)
router.use('/levels', levelRouter)
router.use('/execute', codeRouter)

module.exports = router