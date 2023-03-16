const express = require('express')

const { locations, getLocations } = require('../controllers/locations')

const router = express.Router()

router.get('/locations', getLocations)

router.post('/locations', locations)


module.exports = router