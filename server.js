// Dependencies
const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()
const cors = require('cors')

const unitRouter = require('./controllers/unitRouter')
const abilityRouter = require('./controllers/abilityRouter')

const {PORT = 3001, DATABASE_URL } = process.env
const app = express()

// MongoDB Config
mongoose.connect(DATABASE_URL)
mongoose.connection
    .on('error', () => console.log('MongoDB error has occured)'))
    .on('connected', () => console.log('Listening on MongoDB'))
    .on('disconnected', () => console.log('Disconnected from MongoDB'))

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())


// Routes
app.use('/unit', unitRouter)
app.use('/ability', abilityRouter)


// PORT listening
app.listen(PORT, () => console.log('Listening on PORT ' + PORT))