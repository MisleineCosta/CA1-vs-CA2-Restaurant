const mongoose = require('mongoose'); // type of import mongoose
// Schema - layout sign of object 
const productSchema = mongoose.Schema({ // class Schema - export the Schema into the module
    _id: mongoose.Schema.Types.ObjectId,
    name: String, // StringConstructor 
    price: Number
});
// the module is the object itself, it provides a construction to build an object based on the schema. 
module.exports = mongoose.model('Product', productSchema);// it takes two arguments 