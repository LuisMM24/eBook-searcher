var express = require('express');
var router = express.Router();
const { signUp } = require("../controllers/userController");
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware)

router.post('/sign-up', signUp)

module.exports = router;
