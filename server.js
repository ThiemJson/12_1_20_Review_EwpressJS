require('dotenv').config();
const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("./routes/user.routes.js");
const userLogin = require("./routes/auth.routes.js");
const shopCart = require("./routes/cart.routes");
const bodyParser = require('body-parser');
const authMiddleware = require('./middleware/auth.middleware');
const sessionID = require("./middleware/session.middleware");

app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'pug'); // Sử dụng pug làm view engine

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
const cookieParser = require('cookie-parser');
app.use(cookieParser(process.env.SESSION_SECRET)) // use to read format cookie
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
app.use(sessionID);
app.use('/users',authMiddleware.requireAuth, userRoute);
app.use('/auth',userLogin);
app.use('/shop',shopCart);
//app.get 
