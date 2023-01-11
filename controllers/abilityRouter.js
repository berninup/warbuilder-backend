const Ability = require("../models/ability")
const express = require('express')

const abilityRouter = express.Router()

// Find All Abilities
abilityRouter.get('/', (req, res) => {
    Ability.find({}, (error, allAbilities) => {
        res.json(allAbilities)
    })
})

// Delete Ability TODO


// Update Ability TODO

// Create New Ability