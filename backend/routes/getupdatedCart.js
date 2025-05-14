const express = require('express');
const router = express.Router();
const getupdatedCart = require('../controllers/getupdatedCart'); 
router.route('/getupdatedcart')
      .get(getupdatedCart.getCart);
module.exports = router;