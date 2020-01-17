const shortid = require('shortid');
const db = require("../db");


module.exports=(req,res,next)=>{

    if(!req.signedCookies.sessionID){
        let sessionId = shortid.generate();
        res.cookie('sessionID',sessionId,{
            signed: true
        });
        db.get("sessions").push({
            id: sessionId
        }).write();
    }
    next();
}