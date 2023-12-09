const CategoryModal = require("../models/Category"); // Đổi tên biến UserModel

class Category {
  async addCategory(req, res) {
    const { name } = req.body;
    try {
      const newCategory = new CategoryModal(req.body);
      await newCategory.save();

      res.status(201).json({
        message: "Success",
        data: {
          newCategory,
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

module.exports = new Category();
