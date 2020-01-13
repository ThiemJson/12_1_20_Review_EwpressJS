const db = require("../db")

module.exports.server = (request,response)=>{
    response.render(`users/user.pug`,{
        users:db.get("users").value()
    })
}