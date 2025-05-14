const express = require('express');
const router = express.Router();
const updateCartdata = require('../middleware/updatedCart');

 router.route('/sendupdatedcart')
       .post(updateCartdata.updateCart)

module.exports = router;