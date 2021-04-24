const mongoose = require('mongoose'); // type of import mongoose

const productSchema = mongoose.Schema({ // class Schema
    _id: mongoose.Schema.Types.ObjectId,
    name: String, // StringConstructor 
    price: Number
});

module.exports = mongoose.model('Product', productSchema);