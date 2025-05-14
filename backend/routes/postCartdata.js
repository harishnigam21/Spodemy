const express = require("express");
const router = express.Router();
const cartdata = require("../middleware/postCartdata");

router.route("/postcartdata").post(cartdata.postData);

module.exports = router;
