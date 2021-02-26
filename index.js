const http = require('http');

http.createServer((req, res)=>{
  res.write("My first API - MC \n"); // write a response
  res.end(); //end the response
}).listen(3000); // listen for requests on port 3000

 let users = []; // names of users will be stored here
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(({ data }) => {
      users = data.map(user => user.name); // get only the names of the users and store in an array
    })
    .catch(error=>{
      console.log(error);
    });

