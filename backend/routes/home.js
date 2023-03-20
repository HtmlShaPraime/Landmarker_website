const express = require('express')

const { locations, getLocations, getRequestedLocations, verifyLocations } = require('../controllers/locations')

const router = express.Router()

// get unverified locations
router.get('/newlocations', getRequestedLocations)

// verify location
router.get('/newlocations/:id', verifyLocations)

// get verified locations
router.get('/locations', getLocations)

// request a location
router.post('/locations', locations)


module.exports = router