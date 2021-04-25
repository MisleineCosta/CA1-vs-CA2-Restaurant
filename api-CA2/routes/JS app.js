const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose"); // it will import mongoose

const productRoutes = require("./api-CA2/routes/products");
const orderRoutes = require("./api-CA2/routes/orders");

//For to set up a connection within database, I need to pass a path from mongoDB on the step next. 
mongoose.connect(
// PW will be in an environment variable like this👇🏼
  "mongodb://Costa:" +
  process.env.MONGO_ATLAS_PW +
  "M@26mi31@costa.xrtym.mongodb.net/myFirstDatabase?retryWrites=truew=majority",
  
    {
    useMongoClient: true // to connect at client
    }
);      
// to set up connection to my database
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
