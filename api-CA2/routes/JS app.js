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
mongoose.Promise = global.Promise; 

// to set up connection to my database
app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/user", userRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;

