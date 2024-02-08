const express = require("express");

const adminController = require("../controllers/admin");
const router = express.Router();

router.get("/admin", adminController.adminDash);

module.exports = router;
