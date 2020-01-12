const express = require("express");
const app = express();
const port = 3000;

// app listen
app.listen(port,(req,res)=>{
    console.log(`Server listen on port ` + port);
});