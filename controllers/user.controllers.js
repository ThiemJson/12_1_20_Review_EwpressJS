const db = require("../db");
const shortid = require('shortid');
const md5 = require("md5");

module.exports.server = (request,response)=>{
    response.render(`users/user.pug`,{
        users:db.get("users").value()
    })
}
module.exports.search = (request,response)=>{
    let name = request.query.name.toLowerCase();
    let matchedUsers = db.get("users").value().filter((user)=>{
        return user.name.toLowerCase().indexOf(name) !== -1;
    })
    response.render(`users/user.pug`,{
        users : matchedUsers
    })
}
module.exports.create = (request,response)=>{
    response.render('users/createUser.pug');
}

module.exports.createPost = (request,response)=>{
    request.body.id = shortid.generate();
    let userName = request.body.name; 
    let userEmail = request.body.email;
    let userPass = request.body.password;
    if((!userEmail) || !userPass || !userName ){
        response.render('users/createUser.pug',{
            err: [
                "Something was wrong, try again pls"
            ]
        });
        return;
    }
    request.body.password = md5(request.body.password);
    db.get('users').push(request.body).write();
    response.redirect("/users");
}