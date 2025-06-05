const express = require("express");
const router = express.Router();
const uploadthingHandler = require("../middleware/uploadthing");

router.use("/api/uploadthing", uploadthingHandler);

module.exports = router;
