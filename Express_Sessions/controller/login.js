const users = require("../models/users");

module.exports.getLogin = (req,res)=>{ 
    res.render('login',{
        msg: req.flash('msg')
    });
}

module.exports.postLogin = (req,res)=>{
    const {username,password} = req.body;
    if(username === req.session.username && password === req.session.password){
        res.redirect('/profile');
    }else{
        req.flash('msg','Invalid Credentials');
        res.redirect('/login');
    }
}