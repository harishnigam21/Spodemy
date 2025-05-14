const express = require('express');
const router = express.Router();
const getOrderitem = require('../middleware/getOrderitem'); 
router.route('/getorderitem')
      .get(getOrderitem.orderItem);
module.exports = router;