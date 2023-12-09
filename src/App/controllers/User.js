const UserModel = require("../models/User"); // Đổi tên biến UserModel

class User{



    async addUser(req, res){
        const { email , password} = req.body;
        try {
          const existingUser = await UserModel.findOne({ email });

          if (existingUser) {
            return res
              .status(400)
              .json({ check: "false", message: "Email already exists" });
          }

          const newUser = new UserModel({ email , password });
          await newUser.save();

          res.status(201).json({
            check: "Success",
            data: {
              newUser,
            },
          });
        } catch (error) {
          res.status(500).json({
            check: "false",
            message: error.message,
          });
        }
    }

    async updatePassword(req, res){
        const { email , password } = req.body;
        
    }

    async deleteUser(req, res){

    }

    
}

module.exports = new User();