const //mongoose = require('mongoose');
var mongoose = require('mongoose');
//Set up default mongoose connection

const alienSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true   
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Alien', alienSchema)

