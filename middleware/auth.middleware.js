const db = require("../db");

module.exports.requireAuth = (req,res,next)=>{
    let user = db.get('users').find({id: req.signedCookies.userID}).value();
    if(!(req.signedCookies.userID)){
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
