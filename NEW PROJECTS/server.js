//1 import http server/module
const http = require('http');   


// 2nd to create server
const server = http.createServer((req,res)=>{
    return res.end("welcom to node js server");
});

//3rd 
