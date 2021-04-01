app.post('/users', userCtrl.createUser);
app.get('/users', userCtrl.getUsers);
app.get('/users/:id', userCtrl.getUser);
app.delete('/users/:id', userCtrl.deleteUser);
app.put('/users/:id', userCtrl.updateUser);

// We need to define a variable for Express:
var express = require('express'),
router = express.Router();