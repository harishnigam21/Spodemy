const express = require('express');
const router = express.Router();
const getProductdata = require('../controllers/getProductdata'); 
router.route('/getproductdata')
      .get(getProductdata.getProduct);
module.exports = router;