const express = require("express");
const app = express();
const port = 3000;


app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'pug'); // Sử dụng pug làm view engine
// Một cái Database đơn giản
users =[
    {id: 1, name: "CaoThiem"},
    {id: 2, name: "MinhChou"},
    {id: 3, name: "nyThiem"},
    {id: 4, name: "nyChou"},
    {id: 5, name: "ThiemYeuChou"}
]

// app listen
app.listen(port,(req,res)=>{
    console.log(`Server listen on port ` + port);
});


//app.get 
app.get(`/views/users`,(request,response)=>{
    response.render(`users/user.pug`,{
        users:users
    })
})