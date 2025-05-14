const express = require('express');
const router = express.Router();
const signin = require('../middleware/signin');

router.route('/signin')
      .post(signin.verifyUser);

module.exports = router;