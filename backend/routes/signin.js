const express = require('express');
const router = express.Router();
const signin = require('../controllers/signin');

router.route('/signin')
      .post(signin.verifyUser);

module.exports = router;