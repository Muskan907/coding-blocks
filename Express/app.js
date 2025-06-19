const express = require('express');
const app = express();
const PORT = 8080;

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>');
})

// app.get('/greet/:name',(req,res)=>{
//     console.log(req);
//     res.send(`Hello ${req.params.name}`);
// })
app.get('/greet',(req,res)=>{
    console.log(req);
    res.send(`Hello Good${req.query.x} ${req.query.name}`); //write localhost:8888/greet?name=Muskan&x=day
})

app.listen(PORT,(err)=>{
    console.log(`Server started at http://localhost:${PORT}`)
})