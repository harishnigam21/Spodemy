const express = require('express');
const router = express.Router();
const getCart = require('../middleware/getCartdata'); 
router.route('/getcartdata')
      .get(getCart.getCartdata);
module.exports = router;