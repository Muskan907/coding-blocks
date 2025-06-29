const Users = require("../models/users");

module.exports.getSignup = (req,res)=>{
    res.render('signup');
}

module.exports.postSignup = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        let user = await Users.findOne({
             username 
            }).exec();

        if (!user) {
            try{
                user = await Users.create({username,password})
                req.session.username = username;
                req.session.password = password;
                console.log(req.session);
                req.flash('msg','Signup Successful');
                return res.redirect('/login');
            }catch{
                    req.flash('msg','Signup Not Successful');
                    return res.redirect('/signup');
            }
        }else{
            req.flash('msg','user already exist');
            return res.redirect('/login');
        }
    }   
    
    catch (err) {
        next(err);
    }
};