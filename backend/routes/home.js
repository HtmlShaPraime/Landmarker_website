const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'Home'})
})

router.get('/signup', (req, res) => {
    res.json({mssg: 'Sign up form'})
})

router.get('/login', (req, res) => {
    res.json({mssg: 'Login form'})
})


module.exports = router