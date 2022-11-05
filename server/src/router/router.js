const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

router.post('/create/User', userController.createUser)

module.exports = router
