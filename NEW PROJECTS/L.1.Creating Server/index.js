const http = require('http');

// to read the file we use fs module that is use to read the all file
const fs = require('fs')


const server = http.createServer((req, res)=>{
    //here we return html file 
    const data = fs.readFileSync('index.html').toString()
    res.end(data)
});

server.listen(3100,()=>{
    console.log("the server running the port number :: 3100")
});