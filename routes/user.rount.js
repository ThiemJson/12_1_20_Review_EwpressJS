var express = require('express');
var router = express.Router();
const db = require("../db")

router.get(`/`,(request,response)=>{
    response.render(`users/user.pug`,{
        users:db.get("users").value()
    })
})
router.get(`/search`,(request,response)=>{
    let name = request.query.name.toLowerCase();
    let matchedUsers = users.filter((user)=>{
        return user.name.toLowerCase().indexOf(name) !== -1;
    })
    response.render(`users/user.pug`,{
        users : matchedUsers
    })
})
router.get(`/create`,(request,response)=>{
    response.render('users/createUser.pug');
})
router.post(`/create`,(request,response)=>{
    db.get('users').push(request.body).write()
    response.redirect("/");
})


module.exports = router;