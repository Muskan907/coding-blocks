const express = require('express');
const app = express();
const PORT = 4444;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({extended:true})); //used so that we can actually read the body
app.use(express.static(path.join(__dirname,'public'))); //this is used to send all the static file to the client


let todos = [];

app.get('/gettodos',(req,res,next)=>{
    res.send(todos);
})

app.post('/addtodos',(req,res)=>{
    const {name} = req.body;
    todos.push({
        id:uuidv4(),
        name
    })
    res.redirect('/gettodos');
})

app.post('/deletetodos',(req,res)=>{
    const {id} = req.body;
    todos = todos.filter((task)=>{
        if(task.id==id) return false;
        return true;
    })
    res.redirect('/gettodos');
})

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})