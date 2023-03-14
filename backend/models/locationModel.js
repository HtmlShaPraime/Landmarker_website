const mongoose = require('mongoose')

const Schema = mongoose.Schema

const locationSchema = new Schema({
    locationName: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
})

locationSchema.statics.landmark = async function(locationName, latitude, longitude) {

    if(!locationName || !latitude || !longitude){
        throw Error('All fields have to be filled')
    }
    if(latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180){
        throw Error('Invalid coordinates')
    }

    const exists = await this.findOne({ locationName })

    if(exists) {
        throw Error('There is a landmark with that name already')
    }

    const location = await this.create({locationName, latitude, longitude})

    return location
}

module.exports = mongoose.model('Location', locationSchema)