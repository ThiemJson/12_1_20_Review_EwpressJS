var express = require('express');
var router = express.Router();
const controllers = require("../controllers/user.controllers")

router.get(`/`, controllers.server);
router.get(`/search`, controllers.search)
router.get(`/create`, controllers.create)
router.post(`/create`, controllers.createPost)


module.exports = router;