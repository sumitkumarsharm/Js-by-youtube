// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
const { Console } = require('console');
const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Be a Ninjas")
});

server.listen(8080,()=>{
    console.log("Response Recive at the post:8080")
});


module.exports = server;
