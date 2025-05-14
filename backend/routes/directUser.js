const express = require('express');
const router = express.Router();
const directUser = require('../controllers/directUser');
router.route('/directuser')
      .post(directUser.pullUser)
module.exports = router;