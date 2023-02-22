require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const homeRoutes = require('./routes/home');
const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');

// express app
const app = express()

// mongoose warning
mongoose.set('strictQuery', true)

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use(homeRoutes)
app.use(signupRoutes)
app.use(loginRoutes)

// connecting to database
mongoose.connect(process.env.MONGO_CONN_STR)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected to db && listening on port', process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err)
    })
