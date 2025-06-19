const express = require('express');
const app = express();
const path = require ('path')

// Setup the hbs engine
app.set('view engine','hbs');
// app.set('views','myhbsfolder');

app.get('/',(req,res)=>{
    res.sendFile( path.join(__dirname,'index.html'));
})

app.get('/learnhbs',(req,res)=>{
    res.render('index.hbs',{
        title:'Handlebars',
    });
})

app.listen(8888,()=>{
    console.log('server is running at http://localhost:8888')
})
