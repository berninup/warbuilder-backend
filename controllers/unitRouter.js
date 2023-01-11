const Unit = require("../models/unit")
const express = require('express')

const unitRouter = express.Router()

// Find all Units by MongoDB id
unitRouter.get('/', (req, res) => {
    Unit.find({}, (error, allUnits) => {
        res.json(allUnits)
    })
})

// Delete Unit TODO

// Update Unit TODO

// Crate New Unit
unitRouter.post('/', (req, res) => {
    Unit.create(req.body, (error, unit) => {
        res.json(unit)
    })
})