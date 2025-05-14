const express = require('express');
const router = express.Router();
const checkOut = require('../middleware/checkOut');

 router.route('/checkout')
       .post(checkOut.checkout)

module.exports = router;