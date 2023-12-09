const HighlightTagModal = require("../models/Highlight_tag"); // Đổi tên biến UserModel

class HighlightTag {
  async addCategory(req, res) {
    try {
      const newHighlightTag = new HighlightTagModal(req.body);
      await newHighlightTag.save();
      res.status(201).json({
        message: "Success",
        data: {
          newHighlightTag,
        },
      });
    } catch (error) {
      res.status(500).json({
        check: "false",
        messsage: error.message,
      });
    }
  }
}

module.exports = new HighlightTag();
