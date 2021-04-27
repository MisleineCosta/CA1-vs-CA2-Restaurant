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

//PRODUCT routes CRUD
productCtrl = require('./product-controller');

router.post('/products', productCtrl.createProduct);//CREATE USER/ books are the table find on the collection
router.get('/products', productCtrl.getProducts);//READ all
// router.get('/products/:id', productCtrl.getProduct);//FIND USER BY id
// router.put('/products/:id', productCtrl.updateProduct);//UPDATES USER BY id
// router.delete('/products/:id', productCtrl.deleteProduct);//DELETE USER BY id

//EXPORTS
module.exports = router;