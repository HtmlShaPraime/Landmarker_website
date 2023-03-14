const express = require('express')

const { locations, getLocations } = require('../controllers/locations')

const router = express.Router()

router.get('/', (req, res) => {
    // get db.locations
    res.status(200).json({mssg: 'GET request'})
})

router.get('/locations', getLocations)

router.post('/locations', locations)

module.exports = router