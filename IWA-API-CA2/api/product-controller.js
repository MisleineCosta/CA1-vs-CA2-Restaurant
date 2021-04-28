var Product = require('./models/product')//Product variable created / user class created

//function calling the routes
//CODE for create a  new product
exports.createProduct = function(req, res) { 
    var newProduct = new createProduct(req.body);//newProduct variable created
    newProduct.save(function (err, product) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(product); //otherwise output the book schema
});
};

//CODE for read all products
exports.getProducts = function(req, res) {
  Product.find({}, function (err, products) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(product);
  }); 
};

//CODE for read a single book
exports.getProduct = function(req, res) {
  Product.findOne({_id: req.params.id}, function (err, products) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(products);
  }); 
};

//CODE for find a single user
exports.updateProduct = function(req, res) {
  Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, products) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(products);
  }); 
};

//CODE for find a single user/req-body=HTTP request
exports.deleteProduct= function(req, res) {
  Product.findByIdAndRemove({_id: req.params.id}, function (err, products) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(products);
  }); 
};


// 
// var User = require('./models/user')

// //This is for All Users to Read.
// exports.createUser = function(req, res) { 
//     var newuser = new User(req.body);
//     newuser.save(function (err, user) {   

// //  User.find({}, function (err, users) {
//      if (err) { 
//         res.status (400).json(err);
//     }
// //res.json(users);
//         res.json(user); 
// });
// };

// //For a Single User to Read.
// exports.getUsers = function(req, res) {
//   User.find({}, function (err, users) {
//     if (err) {
//       res.status(400).json(err); 
//     } 
//     res.json(users);
//   }); 
// };


// exports.getUser = function (req, res) {
//   User.findOne({_id: req.params.id}, function (err, users) {
//     if (err) {
//       res.status(400).json(err); 
//     } 
//     res.json(users);
//   }); 
// };

// // In order to Update (Single User)
// exports.updateUser = function(req, res) {
//   User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, users) {
//     if (err) {
//       res.status(400).json(err); 
//     } 
//     res.json(users);
//   }); 
// };

// // For Removing (Single User)
// exports.deleteUser = function(req, res) {
//   User.findByIdAndRemove({_id: req.params.id}, function (err, users) {
//     if (err) {
//       res.status(400).json(err); 
//     } 
//     res.json(users);
//   }); 
// };