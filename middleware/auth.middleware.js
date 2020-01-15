const db = require("../db");

module.exports.requireAuth = (req,res,next)=>{
    console.log(req.cookies);
    if(!(req.cookies.userID)){
        res.redirect('/auth/login');
        return;
    }
    if(!(db.get('users').find({id: req.cookies.userID}).value())){
        res.redirect('/auth/login');
        return;
    }
    next();
}
