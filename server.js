const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ users: []})
  .write()

app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'pug'); // Sử dụng pug làm view engine

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// // Một cái Database đơn giản
// users =[
//     {id: 1, name: "CaoThiem"},
//     {id: 2, name: "MinhChou"},
//     {id: 3, name: "nyThiem"},
//     {id: 4, name: "nyChou"},
//     {id: 5, name: "ThiemYeuChou, rat la yeu chou"}
// ]

// app listen
app.listen(port,(req,res)=>{
    console.log(`Server listen on port ` + port);
});



//app.get 
app.get(`/`,(request,response)=>{
    response.render(`users/user.pug`,{
        users:users
    })
})

app.get(`/users/search`,(request,response)=>{
    let name = request.query.name.toLowerCase();
    let matchedUsers = users.filter((user)=>{
        return user.name.toLowerCase().indexOf(name) !== -1;
    })
    response.render(`users/user.pug`,{
        users : matchedUsers
    })
})

app.get(`/users/create`,(request,response)=>{
    response.render('users/createUser.pug');
})

app.post(`/users/create`,(request,response)=>{
    console.log("Done");
    users.push(request.body);
    response.redirect("/");
})