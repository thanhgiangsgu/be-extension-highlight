const TagModal = require("../models/Tag"); // Đổi tên biến UserModel

class HighlightTag {
  async addCategory(req, res) {
    try {
      const newTag = new TagModal(req.body);
      await newTag.save();
      res.status(201).json({
        message: "Success",
        data: {
          newTag,
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
