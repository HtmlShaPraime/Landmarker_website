const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    // firstName: {
    //     type: String,
    //     required: true
    // },
    // lastName: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// firstName, lastName, 
userSchema.statics.signup = async function(email, password) {

    // !firstName || !lastName || 
    if(!email || !password){
        throw Error('All fields have to be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Not a valid email')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Not a strong password')
    }

    const exists = await this.findOne({ email })

    if(exists) {
        throw Error('Email in use')
    }

    const salt = await bcrypt.genSalt(8)
    const hash = await bcrypt.hash(password, salt) 

    //  firstName, lastName, 
    const user = await this.create({email, password: hash })

    return user
}

userSchema.statics.login = async function(email, password) {
    
    if(!email || !password){
        throw Error('All fields have to be filled')
    }

    const user = await this.findOne({ email })
    if(!user) {
        throw Error('No such email')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)