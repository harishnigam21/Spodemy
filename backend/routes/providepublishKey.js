const express = require('express');
const router = express.Router();
const sendKey = require('../middleware/providepublishKey'); 
router.route('/publishkey')
      .get(sendKey.provideKey);
module.exports = router;