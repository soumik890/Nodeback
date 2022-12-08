const {
  create,
  getUsers,
  getUsersById,
  updateUser,
  deleteUser,
} = require("./user_service");
const { genSaltSync, hashSync } = require("bcrypt");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.passkey = hashSync(body.passkey, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        sucess: 1,
        data: results,
      });
    });
  },

  getUsersByUserId: (req, res) => {
    const body = req.body;
    getUsersById(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.ststus(500).json({
          success: "false",
          message: "error in getting users by id",
        });
      }
      return res.status(200).json({
        success: "true",
        data: results,
      });
    });
  },

  deleteUserById: (req, res) => {
    const body = req.body;
    deleteUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500 || 404).json({
          success: "false",
          message: "connection error",
        });
      }
      return res.status(200).json({
        success: "true",
        data: results,
      });
    });
  },
};
