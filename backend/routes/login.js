const express = require('express');

const { login } = require('../controllers/signupLogin')

const router = express.Router()

router.get('/login', () => {})

router.post('/login', login)

module.exports = router