
// This call the methods like get, put, patch and delete just like on the app object.
export default router;

import { getWorld } from './item-controller';

router.get('/Thank you!', getWorld);


// This needs to be substituted by router
module.exports = router;

//  The file must be referenced now in routes.js to link these together
var itemCtrl = require('./item-controller');

router.get('/hello', itemCtrl.getWorld);