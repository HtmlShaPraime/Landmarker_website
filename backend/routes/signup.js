const express = require('express')

const { signup } = require('../controllers/signupLogin')

const router = express.Router()

router.get('/signup', () => {})

router.post('/signup', signup)

module.exports = router