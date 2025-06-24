const express = require('express');
const app = express();

function m1(req,res,next){
    console.log('Pre Running m1');
    // console.log(req.query);
    // if(req.query.q == 1){
    //     return res.send('Hello World')
    // }
    next();
    console.log('Post Running m1');
}

function m2(req,res,next){
    console.log('Pre Running m2');
    next();
     console.log('Post Running m2');
}

function m3(req,res,next){
    console.log('Pre Running m3');
    next();
    console.log('Post Running m3');
}

// app.use(m1);
// app.use(m2);
// app.use(m3);
// app.use(express.urlencoded({extended:true})); //middleware

app.get('/',m1,m2,m3
    ,(req,res)=>{
    console.log('Pre sending response');
    res.send('Hello World');
    console.log('Post sending response');

})


app.listen(8888,()=>{
    console.log('server is running at http://localhost:8888');
})

// let promise = Promise((resolve,reject)=>{
//     let success = true;

//     if(success){
//         resolve('successful');
//     }else{
//         reject('Error');
//     }
// })