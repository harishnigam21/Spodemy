const express = require('express');
const router = express.Router();
const updateCartdata = require('../controllers/updatedCart');

 router.route('/sendupdatedcart')
       .post(updateCartdata.updateCart)

module.exports = router;