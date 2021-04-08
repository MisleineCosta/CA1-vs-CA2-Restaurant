
// This call the methods like get, put, patch and delete just like on the app object.
export default router;
import { getWorld } from './item-controller';

router.get('/Thank you!', getWorld);

// This needs to be substituted by router
module.exports = router

//  The file must be referenced now in routes.js to link these together
const express = require('express'),
    router = express.Router();

var itemCtrl = require('./item-controller');
userCtrl = require('/user-controller');

/*router.get('/hello', itemCtrl.getWorld);
router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);
router.post('/hello', itemCtrl.postWorld);
*/
router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);

module.exports.UPPLOAD_PATH = "uploads";

var multer = require("multer");
var uppload = multer({ dest: module.exports.UPPLOAD_PATH });
var imageCtrl = require(',/image-controller');

router.post('')
//router.post(',/images', uppload.single('image'), imageCtrl.uploadImage);
router.get('/images', imagesCtrl.getImages);

module.exports = router;

