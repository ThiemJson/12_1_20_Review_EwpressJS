const express = require("express");
const router = express.Router();
const controllers = require("../controllers/auth.controllers.js");



router.get('/login', controllers.login);
router.post('/login', controllers.postLogin);
module.exports = router;