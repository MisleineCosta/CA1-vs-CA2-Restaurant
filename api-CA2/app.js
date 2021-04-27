const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");

var port = process.env.PORT || 8000;

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});

app.use(express.static('static'));

mongoose.connect(
  "mongodb+srv://Costa:Ma26mi31@costa.xrtym.mongodb.net/myFirstDatabase?retryWrites=truew=majority",
  
    {
        useMongoClient: true
    }
);      

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
})
