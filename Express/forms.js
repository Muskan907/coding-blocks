const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/forms.html');
})

app.get('/greet',(req,res)=>{
    res.send(`Hello World,${req.query.name}`);
})

app.post('/greet',(req,res)=>{
    res.send(`Hello evening,${req.body.name}`);
})

app.listen(8080,()=>{
    console.log('Server is running at http://localhost:8080');
})