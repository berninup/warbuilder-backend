const mongoose = require('mongoose')

const unitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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
    rank: {
        type: String,
        required: true
    }
})

const Unit = mongoose.model('Unit', unitSchema)
module.exports = Unit