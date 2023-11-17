// use the express
const express = require('express');
//call the function
const app = express();


//creating a port
const port =3100;


//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/home',(req, res)=>{
    res.send("<h1>node js surver running</h1>");
});

//returning the server
app.listen(port,()=>{
    console.log("server is running on the port",port);
})

