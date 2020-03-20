const router = require('express').Router()
const { levelController } = require('../controllers')

router.get('/', levelController.getAllLevel)
module.exports = router