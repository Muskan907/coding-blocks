// go on inspect the n application inside which we will find cookies
// first in the t erminal write :npm init,npm i express,npm i express cookie
const path = require('path');
const express = require('express');
const app = express();
const PORT = 4442;
const cookie = require('cookie');

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    let cookies = cookie.parse(req.headers.cookie || '');
    console.log(cookies.loggedIn);
    if(cookies.loggedIn){
        return res.redirect('/profile');
    }
    // res.send('Hello World!');
    res.redirect('/login');
});

app.get('/login',(req,res)=>{
     let cookies = cookie.parse(req.headers.cookie || '');
    console.log(cookies.loggedIn);
    if(cookies.loggedIn){
        return res.redirect('/profile');
    }
    res.setHeader('Set-Cookie',
        cookie.serialize(
            'loggedIn',
           'true',
            {
                // maxAge: 10
            }
        )
    );
    res.send('You are logged in');
})

app.get('/profile',(req,res)=>{
    let cookies = cookie.parse(req.headers.cookie || '');
    console.log(cookies.loggedIn);
    if(cookies.loggedIn){
        return res.send('Welcome to your profile!');
    }
    // res.send('Hello World!');
    res.redirect('/login');
})

app.get('/random',(req,res)=>{
    let cookies = cookie.parse(req.headers.cookie || '');
    console.log(cookies.loggedIn);
    let loggedIn = (cookies.loggedIn =='true');
    console.log(loggedIn);
    if(loggedIn){
        res.send('Your loggedIn key is true');
    }
    else{
        res.send('Your loggedIn key is true');
    }
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})

// const path = require('path');
// const express = require('express');
// const cookie = require('cookie');

// const app = express();
// const PORT = 4444;

// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//     let cookies = cookie.parse(req.headers.cookie || '');
//     console.log('Home Route - LoggedIn:', cookies.loggedIn);

//     if (cookies.loggedIn === 'true') {
//         return res.redirect('/profile');
//     }
//     res.redirect('/login');
// });

// app.get('/login', (req, res) => {
//     res.setHeader('Set-Cookie', cookie.serialize('loggedIn', 'true', {
//         maxAge: 60, // Cookie will expire in 60 seconds
//         path: '/',
//     }));
//     res.send('✅ You are logged in! Cookie set.');
// });

// app.get('/profile', (req, res) => {
//     let cookies = cookie.parse(req.headers.cookie || '');
//     console.log('Profile Route - LoggedIn:', cookies.loggedIn);

//     if (cookies.loggedIn === 'true') {
//         res.send('👤 Welcome to your Profile page!');
//     } else {
//         res.redirect('/login');
//     }
// });

// app.listen(PORT, () => {
//     console.log(`✅ Server running at: http://localhost:${PORT}`);
// });
