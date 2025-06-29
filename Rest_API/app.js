const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
// app.use(methodOverride('_method'));

let students = [
    {id:1, name:"John"},
    {id:2, name:"Jane"},
    {id:3, name:"Bob"}
]

app.get('/students',(req,res)=>{
    res.status(200).send(students);
})

app.get('/students/:id',(req,res)=>{
    const {id} = req.params;
    let s = students.filter(s=> s.id == id)

    if(s.length == 0) 
        res.status(400).send('Student not found');
    else 
        res.status(200).send(s);
})

app.put('/students/:id',(req,res)=>{
    const {id} = req.params;
    // const id = parseInt(req.params.id);
    const {name} = req.body;

    students = students.map((s)=>{
        if(s.id == id){
            return{id: s.id, name}
        }
        else{
            return s;
        }
    })
     res.status(200).send(students);
})


app.delete('/students/:id',(req,res,next)=>{
    const {id} = req.params;
    // const id = parseInt(req.params.id);
    const {name} = req.body;

    students = students.filter((s)=>{
        if(s.id == id){
            return false;
        }
        else{
            return true;
        }
    })
     res.status(200).send(students);
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});