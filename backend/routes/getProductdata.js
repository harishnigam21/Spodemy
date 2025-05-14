const express = require('express');
const router = express.Router();
const getProductdata = require('../middleware/getProductdata'); 
router.route('/getproductdata')
      .get(getProductdata.getProduct);
module.exports = router;