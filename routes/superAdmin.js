const express = require("express");

const superAdminController = require("../controllers/superAdmin");
const router = express.Router();

router.get("/super.admin", superAdminController.superAdminDash);

module.exports = router;
