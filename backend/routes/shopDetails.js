const express = require('express');
const router = express.Router();
const shopDetails = require('../controllers/shopDetails'); 
router.route('/shopdetails')
      .post(shopDetails.postshopDetails)
      .get(shopDetails.getshopDetails);
module.exports = router;