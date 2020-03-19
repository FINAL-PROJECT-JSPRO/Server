const router = require('express').Router()

router.get('/', (req, res) => res.send('Get Exam'))

module.exports = router