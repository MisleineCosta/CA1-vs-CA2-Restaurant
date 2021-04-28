//dependencies
const express = require('express'),
router = express.Router();

// This call the methods like get, put, patch and delete just like on the app object.
router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);

//Book routes CRUD
productCtrl = require('/product-controller');
//CREATE USER/ products are the table find on the collection
router.post('/product', productCtrl.createProduct);
//READ all
router.get('/products', productCtrl.getProducts);
//FIND USER BY id
router.get('/products/:id', productCtrl.getProduct);
//UPDATES USER BY id
router.put('/products/:id', productCtrl.updateProduct);
//DELETE USER BY id
router.delete('/products/:id', productCtrl.deleteProduct);
//EXPORTS
module.exports = router;
