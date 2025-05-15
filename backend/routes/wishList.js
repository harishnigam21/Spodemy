const express = require("express");
const router = express.Router();
const wishList = require("../controllers/wishList");
router.route("/wishlist").get(wishList.getWL).post(wishList.postWL);
module.exports = router;
