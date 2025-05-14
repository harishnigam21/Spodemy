const express = require('express');
const router = express.Router();
const getUserdata = require('../controllers/getUserdata'); 
router.route('/getuserdata')
      .get(getUserdata.getUser);
module.exports = router;