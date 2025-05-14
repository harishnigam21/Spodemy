const express = require('express');
const router = express.Router();
const getallProductdata = require('../middleware/getallProductdata'); 
router.route('/getallproductdata')
      .get(getallProductdata.getProduct);
module.exports = router;