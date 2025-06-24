const path = require('path');
const express = require('express');
const router = express.Router();
// const { v4: uuidv4 } = require('uuid');

// let todos = [];

// router.get('/gettodos',(req,res,next)=>{
//     res.send(todos);
// })

const todoController = require('../controllers/todocontroller')
router.get('/gettodos',todoController.getGetTodos)
router.post('/addtodos',todoController.postAddTodo)
router.post('/deletetodos',todoController.postDeleteTodo)
router.get("/increasepriority" ,todoController.getIncreasePriority)
router.get("/decreasepriority" ,todoController.getDecreasePriority )

// router.post('/addtodos',(req,res)=>{
//     const {name} = req.body;
//     console.log(name);
//     todos.push({
//         id:uuidv4(),
//         name
//     })
//     // res.redirect('/gettodos');
//     res.send(todos);
// })

// router.post('/deletetodos',(req,res)=>{
//     const {id} = req.body;
//     todos = todos.filter((task)=>{
//         if(task.id==id) return false;
//         return true;
//     })
//     // res.redirect('/gettodos');
//     res.send(todos);
// })

// router.get("/increasepriority" , (req,res)=>{
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

// router.get("/decreasepriority" , (req,res)=>{
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

module.exports=router;