const express = require("express");
const router = express.Router();
const cartControllers = require("../controllers/cart.controllers");

router.get('/',cartControllers.showCart);

module.exports = router;