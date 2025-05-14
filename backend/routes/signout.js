const express = require('express');
const router = express.Router();
const signout = require('../middleware/signout');
router.route('/signout')
      .get(signout.signoutUser)
module.exports = router;