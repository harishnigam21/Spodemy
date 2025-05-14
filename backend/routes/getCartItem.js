const express = require('express');
const router = express.Router();
const getcartItem = require('../middleware/getCartItem'); 
router.route('/getcartitem')
      .get(getcartItem.getItem);
module.exports = router;