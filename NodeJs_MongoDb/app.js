const express=require('express');
const app=express();
const path = require('path');
const PORT = 4444;
const { mongoConnect } = require('./database/database.js');

app.use(express.urlencoded({extended:true}));
app.use(express.json()); //otherwiase axios request could not be read
app.use(express.static(path.join(__dirname,'public')));

const requestHandler = require('./routes/todo.js');

app.use('/', requestHandler);

// app.listen(PORT,()=>{
//     console.log(`http://localhost: `+PORT);
// });

mongoConnect()
    .then(()=>{
        console.log('Successfully connected');
        app.listen(PORT,()=>{
           console.log(`http://localhost: `+PORT);
        });
    })
    .catch(err=>{
        console.log('db is not working');
    })