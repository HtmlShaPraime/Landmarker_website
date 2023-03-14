require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const homeRoutes = require('./routes/home');
const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');

const app = express()

// mongoose warning
mongoose.set('strictQuery', true)

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/server', homeRoutes)
app.use('/server', signupRoutes)
app.use('/server', loginRoutes)

// connecting to database
mongoose.connect(process.env.MONGO_CONN_STR)
    .then(() => {

        app.listen(process.env.PORT, () => {
        console.log('connected to db && listening on port', process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err)
    })
