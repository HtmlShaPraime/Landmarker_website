const Location = require('../models/locationModel')

const locations = async (req, res) => {
    const { name, latitude, longitude } = req.body

    try {
        const location = await Location.landmark(name, latitude, longitude)

        res.status(200).json({location})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getLocations = async (req, res) => {
    try {
        const locations = await Location.find({verified: true})

        res.status(200).json(locations)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getRequestedLocations = async (req, res) => {
    try {
        const locations = await Location.find({verified: false})

        res.status(200).json(locations)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const verifyLocations = async (req, res) => {
    const {id} = req.params 
    
    try {
        const locations = await Location.findOneAndUpdate({_id: id}, {
            verified: true
        })

        res.status(200).json(locations)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { locations, getLocations, getRequestedLocations, verifyLocations }