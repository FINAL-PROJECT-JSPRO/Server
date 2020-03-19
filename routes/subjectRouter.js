const router = require('express').Router()

router.get('/', (req, res) => res.send('Get Subject'))

module.exports = router