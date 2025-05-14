const express = require('express');
const router = express.Router();
const getallProductdata = require('../controllers/getallProductdata'); 
router.route('/getallproductdata')
      .get(getallProductdata.getProduct);
module.exports = router;