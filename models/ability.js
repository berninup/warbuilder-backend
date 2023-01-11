const mongoose = require('mongoose')

const abilitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
})

const Ability = mongoose.model('Ability', abilitySchema)

module.exports = Ability