const express = require("express");
const router = express.Router();
const updateStock = require("../controllers/updateStock");
router.route("/updatestock").post(updateStock.update);
module.exports = router;
