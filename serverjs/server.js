// cretaing http server

// const http = require('http');
// const port = 8080;

// const server = http.createServer();
// server.listen(port,(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('Server started at',port);
// });

// Request and Response Server
const http = require('http');
const port = 8080;
const fs =require('fs')

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.writeHead(200,{
        "Content-Type":'text/html'
    });
    fs.readFile('./index.html',(err,data)=>{
        if(err){
           return console.log(err);
        }  
        res.end(data);
    })
    // res.end("<h1 style='color:orange'>hello,here is your requested data</h1>");
});

server.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Server started at',port);
});