const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("./routes/user.rount.js");
const bodyParser = require('body-parser');
const db = require("./db")

app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'pug'); // Sử dụng pug làm view engine

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
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

app.use('/users',userRoute);


//app.get 
