const mongoose = require("mongoose");

const highlightdetailSchema = new mongoose.Schema({
  highlight_id: { type: mongoose.Schema.Types.ObjectId, ref: "Bookmark" },
  content: { type: String, required: true },
  note: {type: String, require: true},
  startPosition: {
    type: Number,
    required: true,
  },
  endPosition: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const HighlightDetail = mongoose.model(
  "HighlightDetail",
  highlightdetailSchema
);

module.exports = HighlightDetail;
