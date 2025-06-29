// //  A Session is a way to store user data between different HTTP requests.
// // When a user logs in, a session can store their login info (user id, name, etc.) so they don’t need to login again on every page.
 
// //  client send the req+cookies it goes to the server and there every cookies is assigned a id which is mapped using sessions 
// // session store is used to store the data so that it do not vanish when refreshed
const path = require('path');
const express = require('express');
const app = express();
const PORT = 4440;
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const mongoose = require('mongoose');
require('dotenv').config()

app.set('views', path.join(__dirname, '/views'));
app.use(flash());
app.set('view engine','hbs');
app.use(express.urlencoded({extended: true}));


let users = [];

app.use(session({
  secret: process.env.SECRET_KEY, //this decides how to actually create the hash id
  resave: false, //if there are changes in the cookies then only change otherwise dont change the cookies at the client side
  saveUninitialized: true, //it specifies whether we have to make the cookie or not;depends on the need of the client 
//   store: MongoStore.create({ mongoUrl: 'mongodb://localhost/test-app' })
 store: MongoStore.create({
  mongoUrl: process.env.DB_PATH
})
}));

app.get('/',(req,res)=>{
    // console.log(req.session); // to return session in the terminal with cookies info 
    // res.send("Welcome");
    res.redirect('/login');
})

const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');
const profileRoute = require('./routes/profile');

app.use('/login',loginRoute);
app.use('/signup',signupRoute);
app.use('/profile',profileRoute);

// app.get('/signup',(req,res)=>{
//     res.render('signup');
// })

// app.post('/signup',(req,res)=>{
//     const {username,password} = req.body;
//     req.session.username = username;
//     req.session.password = password;
//     console.log(req.session);
//     // console.log(username,password);
//     req.flash('msg','Signup Successful');
//     res.redirect('/login');
//     // res.send('Signup Success')
    
// })



// app.get('/login',(req,res)=>{ 
//     res.render('login',{
//         msg: req.flash('msg')
//     });
// })

// app.post('/login',(req,res)=>{
//     const {username,password} = req.body;
//     if(username === req.session.username && password === req.session.password){
//         res.redirect('/profile');
//     }else{
//         req.flash('msg','Invalid Credentials');
//         res.redirect('/login');
//     }
// })


// app.get('/profile', (req, res) => {
//     if(req.session.username){
//         res.render('profile', {
//         username: req.session.username,
//         password: req.session.password
//     });
//     }else{
//         res.redirect('/login');
//     }
    
// });

app.get('/logout',(req,res)=>{
    req.session.destroy(); 
    res.redirect('/');
});

mongoose.connect(process.env.DB_PATH).then(()=>{
    app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    });
});



//  npm install connect-mongo
// npm i connect-flash
// npm i dotenv

// const path = require('path');
// const express = require('express');
// const app = express();
// const PORT = 4440;
// const session = require('express-session');
// const flash = require('connect-flash');

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
// app.use(express.urlencoded({ extended: true }));

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true
// }));

// app.use(flash());

// let users = []; // In-memory user list (Temporary)

// app.get('/', (req, res) => {
//   res.redirect('/login');
// });

// app.get('/signup', (req, res) => {
//   res.render('signup', { msg: req.flash('msg') });
// });

// app.post('/signup', (req, res) => {
//   const { username, password } = req.body;

//   const existingUser = users.find(u => u.username === username);

//   if (existingUser) {
//     req.flash('msg', 'User already exists! Please login.');
//     return res.redirect('/signup');
//   }

//   users.push({ username, password });
//   req.flash('msg', 'Signup Successful! Please login.');
//   res.redirect('/login');
// });

// app.get('/login', (req, res) => {
//   res.render('login', { msg: req.flash('msg') });
// });

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(u => u.username === username && u.password === password);

//   if (user) {
//     req.session.username = username;
//     res.redirect('/profile');
//   } else {
//     req.flash('msg', 'Invalid Credentials');
//     res.redirect('/login');
//   }
// });

// app.get('/profile', (req, res) => {
//   if (req.session.username) {
//     res.render('profile', { username: req.session.username });
//   } else {
//     res.redirect('/login');
//   }
// });

// app.get('/logout', (req, res) => {
//   req.flash('msg', 'Logged out successfully');
//   req.session.destroy(() => {
//     res.redirect('/');
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
