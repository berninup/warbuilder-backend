const mongoose = require('mongoose')

const unitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    faction: String,
    attack: {
        type: String,
        required:true
    },
    defense: {
        type: String,
        required:true
    },
    mAttack: {
        type: String,
        required:true
    },
    mDefense: {
        type: String,
        required:true
    },
    ability: [{
        type: String
    }],
    img: String,
    flavor: String,
    hp: {
        type: String,
        required:true
    },
    movement: {
        type: String,
        required:true
    },
    range: {
        type: String,
        required:true
    },
    rank: {
        type: String,
        required: true
    }
})

const Unit = mongoose.model('Unit', unitSchema)
module.exports = Unit