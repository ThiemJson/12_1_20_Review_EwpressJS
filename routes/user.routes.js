const express = require('express');
const router = express.Router();
const controllers = require("../controllers/user.controllers")
const validator = require('../validator/user.validator');
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });



router.get(`/`, controllers.server);
router.get(`/search`, controllers.search);
router.get(`/create`, controllers.create);
router.post(`/create`,upload.single('avatar'),
                        validator.createUser, 
                        controllers.createPost
);


module.exports = router;