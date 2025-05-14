const express = require('express');
const router = express.Router();
const changepassword = require('../controllers/changepassword');

router.route('/changepassword')
      .patch(changepassword.changePassword);
module.exports = router;