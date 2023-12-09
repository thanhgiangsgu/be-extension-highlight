const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  alias: {
    type: String,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  seo_title: {
    type: String,
  },
  seo_description: {
    type: String,
  },
  seo_avt: {
    type: String,
  },
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;
