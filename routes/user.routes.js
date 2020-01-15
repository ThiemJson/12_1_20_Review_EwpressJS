var express = require('express');
var router = express.Router();
const controllers = require("../controllers/user.controllers")
const validator = require('../validator/user.validator');
const authMiddleware = require("../middleware/auth.middleware");

router.get(`/`,authMiddleware.requireAuth, controllers.server);
router.get(`/search`, controllers.search)
router.get(`/create`, controllers.create)
router.post(`/create`,validator.createUser, controllers.createPost)


module.exports = router;