const db = require("../db")
const md5 = require("md5")

module.exports.login = (request,response)=>{
    response.render(`auth/login`,{
        users:db.get("users").value()
    })
}

module.exports.postLogin = (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    let user = db.get('users').find({email: email}).value();
    if(!user){
        res.render('auth/login',{
            err: [
                "User is not exsit ! "
            ]
        });
        return;
    }
    let passwordHash = md5(password);
    if(user.password != passwordHash){
        res.render('auth/login',{
            err: [
                "Wrong password ! "
            ]
        });
        return;
    };
    res.cookie('userID',user.id,{
        signed: true
    });
    res.redirect('/users');
}