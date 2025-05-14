const express = require('express');
const router = express.Router();
const forgotpassword = require('../controllers/forgotpassword');
router.route('/forgotpassword')
      .post(forgotpassword.forgotPassword)
module.exports = router;