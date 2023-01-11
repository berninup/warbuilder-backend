// Dependencies
const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()
const cors = require('cors')


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


// PORT listening
app.listen(PORT, () => console.log('Listening on PORT ' + PORT))