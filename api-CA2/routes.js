//dependencies
const express = require('express'),
router = express.Router();

//reference into routes from the request logic intem-controller

//Book routes CRUD
bookCtrl = require('./book-controller');

router.post('/books', bookCtrl.createBook);//CREATE USER/ books are the table find on the collection
router.get('/books', bookCtrl.getBooks);//READ all
router.get('/books/:id', bookCtrl.getBook);//FIND USER BY id
router.put('/books/:id', bookCtrl.updateBook);//UPDATES USER BY id
router.delete('/books/:id', bookCtrl.deleteBook);//DELETE USER BY id


//EXPORTS
module.exports = router;