const express = require('express');
const app = express();
const PORT = 4440;
const path = require('path');
// const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({extended:true})); //used so that we can actually read the body
app.use(express.json());  //we have to put this middleware to read the request,otherwise axios request could not be read
app.use(express.static(path.join(__dirname,'public'))); //this is used to send all the static file to the client

const requestHandler = require('./routes/todo1');
app.use('/',requestHandler);
// app.use('/',require('./routes/todo1')); //this is how we create routes

// app.get('/gettodos',(req,res,next)=>{
//     res.send(todos);
// })

// app.post('/addtodos',(req,res)=>{
//     const {name} = req.body;
//     console.log(name);
//     todos.push({
//         id:uuidv4(),
//         name
//     })
//     // res.redirect('/gettodos');
//     res.send(todos);
// })

// app.post('/deletetodos',(req,res)=>{
//     const {id} = req.body;
//     todos = todos.filter((task)=>{
//         if(task.id==id) return false;
//         return true;
//     })
//     // res.redirect('/gettodos');
//     res.send(todos);
// })

// app.get("/increasepriority" , (req,res)=>{
//     const{id} = req.query;
//     console.log(id);
//     let indx;
//     todos.forEach((e,i)=>{
//         if(e.id == id){
//             indx= i;
//         }
//     })
//     console.log(indx);
//     let temp = todos[indx];
//      todos[indx] = todos[indx-1];
//      todos[indx-1] = temp;
//     res.redirect('/gettodos');
// })

// app.get("/decreasepriority" , (req,res)=>{
//     const{id} = req.query;
//     console.log(id);
//     let indx;
//     todos.forEach((e,i)=>{
//         if(e.id == id){
//             indx= i;
//         }
//     })
//     console.log(indx);
//     let temp = todos[indx];
//      todos[indx] = todos[indx+1];
//      todos[indx+1] = temp;
//     res.redirect('/gettodos');
// })

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})