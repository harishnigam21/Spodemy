const express = require('express');
const router = express.Router();
const getProductdata = require('../controllers/productdata'); 
router.route('/productdata')
      .get(getProductdata.getProduct)
      .post(getProductdata.postProduct);
module.exports = router;