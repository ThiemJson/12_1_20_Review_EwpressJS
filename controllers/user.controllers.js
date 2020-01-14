const db = require("../db")

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
    let err = [];
    if(!request.body.name){
        err.push("Name is required ! ")
    }
    if(err.length){
        response.render('users/createUser.pug',{
            err: err
        });
        return;
    }
    db.get('users').push(request.body).write();
    response.redirect("/users");
}