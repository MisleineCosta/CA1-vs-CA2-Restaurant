var User = require('./models/user');

//This is for All Users to Read.
exports.creatUser = function(req, res) {
    var newuser = new User(req.body);
    newuser.save(function (err, user) {   
  //  User.find({}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    //res.json(users);
        res.json(users);
  }); 
};

//For a Single User to Read.
exports.getUser = function(req, res) {
  User.findOne({_id: req.params.id}, function (err, users) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(users);
  }); 
};
// In order to Update (Single User)
exports.updateUsers = function(req, res) {
  User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, user) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(users);
  }); 
};

// For Removing (Single User)
exports.deleteUser = function(req, res) {
  User.findByIdAndRemove(req.params.id, function (err, users) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(users);
  }); 
};