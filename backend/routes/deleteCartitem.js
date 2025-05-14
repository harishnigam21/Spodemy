const express = require('express');
const router = express.Router();
const deleteCartitem = require('../middleware/deleteCartitem'); 
router.route('/deletecartitem')
      .delete(deleteCartitem.deleteCart);
module.exports = router;