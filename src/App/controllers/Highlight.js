const HighlightModal = require("../models/Highlight"); // Đổi tên biến UserModel
const HighlightDetailModal = require("../models/HighlightDetail");
class Highlight {
  async addHighlight(req, res) {
    const {
      user_id,
      locate_path,
      title,
      content,
      note,
      categories,
      startPosition,
      endPosition,
      color,
    } = req.body;
    try {
      const existingHighlight = await HighlightModal.findOne({ locate_path });
      if (existingHighlight) {
        const newHighlightDetail = new HighlightDetailModal({
          highlight_id: existingHighlight._id,
          content,
          note,
          startPosition,
          endPosition,
          color,
        });
        const savedHighlightDetail = await newHighlightDetail.save();
        res.status(201).json(savedHighlightDetail);
      } else {
        const newHighlight = new HighlightModal({
          user_id,
          locate_path,
          title,
          content,
          categories,
        });
        // Lưu instance vào cơ sở dữ liệu
        const savedHighlight = await newHighlight.save();
        res.status(201).json(savedHighlight);
      }
    } catch (error) {
      res.status(500).json({
        check: "false",
        messsage: error.message,
      });
    }
  }

  async fetchHighlight(req, res) {
    const user_id = req.params.id;
    const listHighlight = await HighlightModal.find({
      user_id: user_id,
    }).populate("user_id").populate('categories');

    if (listHighlight.length > 0){
      const newListHighLight = await Promise.all(
        listHighlight.map(async (item) => {
          // Lấy danh sách HighlightDetail dựa trên highlight_id của mỗi item
          const newListHighLightDetail = await HighlightDetailModal.find({
            highlight_id: item._id,
          });

          // Tạo đối tượng mới với thông tin được kết hợp
          const enhancedItem = {
            ...item.toObject(),
            newListHighLightDetail: newListHighLightDetail,
          };

          return enhancedItem;
        })
      );
      res.json(newListHighLight);
    } 
  }
}

module.exports = new Highlight();
