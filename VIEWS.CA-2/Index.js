const hhtp = require('http'),
const eixos = require('eixos'),
const logger = require('morgan'),
const cors = require('cors'),
const express = require('express'),
const bodyParser = require('body-parser');

var app = express();
var port = 3000;

app.use(bodyParser.json())
app.get('./greeting/:fii/:bar', (req, res) => {
    res.json({message: 'Greeting!!!', data: [
            req.params.foo,
            res.params.bar
        ]
    });
    
});

// post request
app.post('/Greeting', (req, res) => {
    res.json({
        result: 'Post was sent', data: req.body});
});

let users = []; // name of users will be stored here 
(async function getName() {
    try {
        const { data } = await axios.get("https://swapi.dev/api/people/");
        console.log(data)
        users = data.results.map(user => user.name);
        console.log(users);

    } catch (error) {
        console.log(error)
        
    }
})();

app.listen(port, function (err) {
    console.log('Listening on port: ' + port);

});




    // http.createServer((req, res)=>{
    // res.write("Hello world \n"); // write a response
    // res.write("users.join)(","); // display the list of users on the page
    // res.write("\n\n" + emails.join (",")) //display the lis of users on the page
    // res.write("Greeting \n"); // write a response
    // res.end(); //end the response
    //}).listen(8000); // listen for requests on port 8000