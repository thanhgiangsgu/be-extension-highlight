const mongoose = require("mongoose");

const highlightSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  locate_path: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },

  is_voca: {
    type: Boolean,
    default: false,
  },
  is_learning: {
    type: Boolean,
    default: false,
  },
  is_remember: {
    type: Boolean,
    default: false,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  priority: {
    type: Number,
    default: 0,
  },
});

const Highlight = mongoose.model("Highlight", highlightSchema);

module.exports = Highlight;
