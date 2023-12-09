var express = require("express");
const router = express.Router();

const user = require("../App/controllers/User.js");

router.post("/add", user.addUser);

module.exports = router;
