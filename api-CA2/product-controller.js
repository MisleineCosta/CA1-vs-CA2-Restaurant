var Product = require('./models/product') //Product variable created / user class created

//function calling the routes
//CODE for create a  new book
exports.createProduct = function(req, res) { 
    var newproduct = new Product(req.body); //newproduct variable created
    newproduct.save(function (err, product) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(product); //otherwise output the book schema
});
};

//CODE for read all book
exports.getProducts = function(req, res) {
  Product.find({}, function (err, products) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(products);
  }); 
};

// //CODE for read a single book
// exports.getBook = function(req, res) {
//   Book.findOne({_id: req.params.id}, function (err, books) {
//     if (err) {
//       res.status(400).json(err); 
//     } 
//     res.json(books);
//   }); 
// };

// //CODE for find a single user
// exports.updateBook = function(req, res) {
//   Book.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, books) {
//     if (err) {
//       res.status(400).json(err); 
//     } 
//     res.json(books);
//   }); 
// };

// //CODE for find a single user/req-body=HTTP request
// exports.deleteBook = function(req, res) {
//   Book.findByIdAndRemove({_id: req.params.id}, function (err, books) {
//     if (err) {
//       res.status(400).json(err); 
//     } 
//     res.json(books);
//   }); 
// };