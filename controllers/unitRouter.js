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
unitRouter.delete('/:id', (req, res) => {
    Unit.findByIdAndDelete(req.params.id, (error, unit) => {
        res.json(unit)
    })
})

// Update Unit TODO
unitRouter.put('/:id', (req, res) => {
    Unit.findByIdAndUpdate(req.params.id, req.body, (error, updatedUnit) => {
        res.json(updatedUnit)
    })
})

// Create New Unit
unitRouter.post('/', (req, res) => {
    Unit.create(req.body, (error, unit) => {
        res.json(unit)
    })
})

// Find Unit by ID
unitRouter.get('/:id', (req,res) => {
    Unit.findById(req.params.id, (error, unit) => {
        res.json(unit)
    })
})

module.exports = unitRouter