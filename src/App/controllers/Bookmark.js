const BookmarkModal = require("../models/Bookmark"); // Đổi tên biến UserModel

class Bookmark {
  async addBookmark(req, res) {
    const {
      url, alias , seo_title, seo_description , seo_avt
    } = req.body;
    try {
      const newBookmark = new BookmarkModal(req.body);
      await newBookmark.save();
      res.status(201).json({
        message: "Success",
        data: {
          newBookmark,
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

module.exports = new Bookmark();
