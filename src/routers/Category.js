var express = require("express");
const router = express.Router();

const category = require("../App/controllers/Category");

router.post("/add", category.addCategory);

module.exports = router;
