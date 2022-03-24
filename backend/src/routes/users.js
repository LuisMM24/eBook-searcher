var express = require('express');
var router = express.Router();
const { signUp } = require("../controllers/userController")

/* GET users listing. */
router.get('/sign-up', signUp)

module.exports = router;
