const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);


/*app.post("/users", userCtrl.createUser);
app.get("/users", userCtrl.getUsers);
app.get("/users/:id", userCtrl.getUser);
app.delete("/users/:id", userCtrl.deleteUser);
app.put("/users/:id", userCtrl.updateUser);

// We need to define a variable for Express:
var express = require("express"),
    router = express.Router();

app.use(require("./routes"));
var express = require("express"),
    router = express.Router(),
    mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/costa");

mongoose.connection.on("error", (err) => {
    console.log(" Mongo database Error: ", err);
    process.exit();
});
mongoose.connection.on("connected", () => {
    console.log("MongoDB is successfully connected");

});
*/
