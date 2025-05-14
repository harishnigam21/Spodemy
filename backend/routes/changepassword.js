const express = require('express');
const router = express.Router();
const changepassword = require('../middleware/changepassword');

router.route('/changepassword')
      .patch(changepassword.changePassword);
module.exports = router;