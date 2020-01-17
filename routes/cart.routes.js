const express = require("express");
const router = express.Router();
const cartControllers = require("../controllers/cart.controllers");

router.get('/',cartControllers.showCart);
router.get('/add/:productID',cartControllers.addToCart);

module.exports = router;