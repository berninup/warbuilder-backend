const Ability = require("../models/ability")
const express = require('express')

const abilityRouter = express.Router()

// Find All Abilities
abilityRouter.get('/', (req, res) => {
    Ability.find({}, (error, allAbilities) => {
        res.json(allAbilities)
    })
})

// Delete Ability
abilityRouter.delete('/:id', (req, res) => {
    Ability.findByIdAndDelete(req.params.id, (error, ability) => {
        res.json(ability)
    })
})

// Update Ability
abilityRouter.put('/:id', (req, res) => {
    Ability.findByIdAndUpdate(req.params.id, req.body, (error, updatedAbility) => {
        res.json(updatedAbility)
    })
})

// Create New Ability
abilityRouter.post('/', (req, res) => {
    Ability.create(req.body, (error, ability) => {
        res.json(ability)
    })
})

// Find Ability By ID
abilityRouter.get('/:id', (req,res) => {
    Unit.findById(req.params.id, (error, ability) => {
        res.json(ability)
    })
})

module.exports = abilityRouter