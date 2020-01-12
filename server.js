const express = require("express");
const app = express();
const port = 3000;

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
app.get(`/`,(request,response)=>{
    response.render(`/views/users/user.pug`,{
        users:users
    })
})