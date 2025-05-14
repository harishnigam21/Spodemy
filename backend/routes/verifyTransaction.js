const express = require("express");
const router = express.Router();
const verifyTrans = require("../controllers/verifyTransaction");

router.route("/verifytransaction").post(verifyTrans.verify);

module.exports = router;
