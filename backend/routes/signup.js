const express = require('express');
const router = express.Router();
const signup = require('../controllers/signup');

 router.route('/signup')
       .post(signup.getUser)

module.exports = router;