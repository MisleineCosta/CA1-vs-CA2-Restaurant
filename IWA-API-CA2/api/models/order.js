var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({ 
    item: { type: String, unique: true},
    price: { type: Number},
    name: { type: String},
     
},
{ timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);//'User', userSchema);