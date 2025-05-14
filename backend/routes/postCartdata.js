const express = require("express");
const router = express.Router();
const cartdata = require("../controllers/postCartdata");

router.route("/postcartdata").post(cartdata.postData);

module.exports = router;
