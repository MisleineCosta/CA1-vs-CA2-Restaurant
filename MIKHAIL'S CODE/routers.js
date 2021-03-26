module.exports = router;

var itemCtrl = require('./item-controller');

router.get('/hello', itemCtrl.getWorld);
