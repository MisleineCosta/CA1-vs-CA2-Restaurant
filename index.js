const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser');

var app = express();
var port = 3000;

app.use(bodyParser.json())

app.get('/ola/:fog/:bar', (req, res) => {
    res.json({
        message: 'Greeting all! ', data: [  
        req.params.fog,
        req.params.bar,
        ]});
    //res.json({ message: 'Greeting all!\n\n' + users.join('\n')});
});

 //second external API
//overpoind https://swapi.dev/api/people

// http.createServer((req, res) => {
//     res.write("Hello Mikhail :) \n..........................\n\n*\n"); // in order to write a response
//     res.write(users.join("\n \n *\n")); // display the list of users on 
//     res.write("\n\n\n............................\nE-MAILS:\n............................\n\n\n");
//     res.write(emails.join("\n\n __________________________\n"));
//     res.end(); //over the response

//}).listen(3000); // for requesting on port 8000  

let users = ["..."]; // names of users will be stored here
let emails = ["..."]; // outgoing email list
(async function getNames() {

    //second external API
    //overpoind https://swapi.dev/api/people

    try {
        const { data } = await axios.get("https://swapi.dev/api/films");//("https://swapi.dev/api/names/users");
        users = data.map(user => user.name);
        emails = data.map(email => email.email);
        console.log(users);
        console.log(emails);
        
    } catch (error) {
        console.log(error)
    }
})();

app.listen(port, function (err) {
    console.log('Listening on port: ' + port);
});