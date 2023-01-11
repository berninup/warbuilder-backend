const Unit = require("../models/unit")
const express = require('express')

const unitRouter = express.Router()

// Find all Units by MongoDB id
unitRouter.get('/', (req, res) => {
    Unit.find({}, (error, allUnits) => {
        res.json(allUnits)
    })
})

