var Book = require('./models/book')//Book variable created / user class created

//function calling the routes
//CODE for create a  new book
exports.createBook = function(req, res) { 
    var newbook = new Book(req.body);//newbook variable created
    newbook.save(function (err, book) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(book); //otherwise output the book schema
});
};

//CODE for read all book
exports.getBooks = function(req, res) {
  Book.find({}, function (err, books) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(books);
  }); 
};

//CODE for read a single book
exports.getBook = function(req, res) {
  Book.findOne({_id: req.params.id}, function (err, books) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(books);
  }); 
};

//CODE for find a single user
exports.updateBook = function(req, res) {
  Book.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, books) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(books);
  }); 
};

//CODE for find a single user/req-body=HTTP request
exports.deleteBook = function(req, res) {
  Book.findByIdAndRemove({_id: req.params.id}, function (err, books) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(books);
  }); 
};