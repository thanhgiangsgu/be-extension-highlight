var express = require("express");
const router = express.Router();

const highlight = require("../App/controllers/Highlight");

router.post("/add", highlight.addHighlight);
router.get("/fetch-highlight/:id", highlight.fetchHighlight);

module.exports = router;
