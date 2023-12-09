const mongoose = require("mongoose");

const highlightTagSchema = new mongoose.Schema({
  highlight_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Highlight",
    required: true,
  },
  tag_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag",
    required: true,
  },
});

const HighlightTag = mongoose.model("HighlightTag", highlightTagSchema);

module.exports = HighlightTag;
