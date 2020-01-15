const db = require("../db")

module.exports.login = (request,response)=>{
    response.render(`auth/login`,{
        users:db.get("users").value()
    })
}

module.exports.postLogin = (req,res)=>{
    let email = req.body.email;
    //let password = parseInt(req.body.password);
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
    if(user.password != password){
        res.render('auth/login',{
            err: [
                "Wrong password ! "
            ]
        });
        return;
    };
    res.cookie('userID',user.id);

    res.redirect('/users');
}