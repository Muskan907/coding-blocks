const express = require('express');
const app = express();

const path = require('path');
const PORT = 4444;

app.use(express.urlencoded({extended:true}));

// Importing router modules of teachers for modular routing
// teacher handler will send request to teacher.js 
const teacherHandler = require('./routes/teacher');
app.use('/teachers',teacherHandler);

// Importing router modules of student for modular routing
const studentHandler = require('./routes/student');
app.use('/students',studentHandler);
// app.use is used to create the routers, we cannot use get here

// Routers cannot use app.listen(); only the main app file should start the server.
app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})