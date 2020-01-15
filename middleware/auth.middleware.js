const db = require("../db");

module.exports.requireAuth = (req,res,next)=>{
    let user = db.get('users').find({id: req.cookies.userID}).value();
    if(!(req.cookies.userID)){
        res.redirect('/auth/login');
        return;
    }
    if(!user){
        res.redirect('/auth/login');
        return;
    }
    res.locals.user = user;
    next();
}
