// it's a middleware that helps us to login via various methods :login locally;login via facebook,google,github etc
// it uses strategies in order to implement various login ways
// npm i express mongoose passport passport-local express-session bcrypt
// npm init y

const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4441;
const mongoose = require('mongoose');
const session = require('express-session');
const myPassport = require('./auth/passport');


app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

mongoose.connect(process.env.DB_PATH).then(()=>{
    app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    });
});