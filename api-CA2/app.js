const http = require('http');
const axios = require('axios');
logger = require('morgan');//output things to the screen
cors = require('cors');
express = require('express');
//const app = express();
//const morgan = require("morgan");
bodyParser = require('body-parser');
mongoose = require('mongoose');
dotenv = require('dotenv');

//INSTANCES listen and push
var app = express();
var port = process.env.PORT || 8000;//port default
dotenv.config();

//app.use(bodyParser.json());//JSON /first
app.use(logger('tiny'));//morgan//knows the n point of requests and responses between the user and controller: GET / 404 139 - 1.760 ms//POST /hello 200 126 - 1.586 ms
app.use(require('./routes'));//last
// app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());

// const productRoutes = require("./routes/products");
// const orderRoutes = require("./routes/orders");


app.listen(port, function(err){
    console.log('Listening on port: ' + port);//print outuput por runner
});

const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('MongoDB is successfully connected'))
    .catch((err) => console.log(err));

//app.use(express.static('static'));

// mongoose.connect(
  
  
//     {
//         useMongoClient: true
//     }
// );      



// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     )
// })
