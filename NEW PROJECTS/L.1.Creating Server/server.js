// Create the server using NODE.js for prectics 
// that why i create this server

//1. Import http library/module
const http = require('http');

//2. Create Server.
const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.write("Welcome to my Application ")
    if(req.url == "/product"){
        res.end("this is product page")
    }
    else if (req.url == "/user") {
        res.end("this is our user page");        
    }
    //here cames to the request
    // res.end('Welocme to node js server')
});

// END method :- end the request and send back to the clint what he want

//3. Specify the port to listen the clint request 
server.listen(3100,()=>{
    console.log("this Server is Listen the port :3100")
});