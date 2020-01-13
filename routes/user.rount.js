var express = require('express');
var router = express.Router();
const db = require("../db")
const controllers = require("../controllers/user.controllers")

router.get(`/`,controllers.server);
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
    response.redirect("/users");
})


module.exports = router;