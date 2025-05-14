const express = require('express');
const router = express.Router();
const checkOut = require('../controllers/checkOut');

 router.route('/checkout')
       .post(checkOut.checkout)

module.exports = router;