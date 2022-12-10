const {
  // create,
  // getUsers,
  // getUsersById,
  // updateUser,
  // deleteUser,
  AllFunction,
} = require("./user_service");
const { genSaltSync, hashSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  // createUser: (req, res) => {
  //   const body = req.body;
  //   const salt = genSaltSync(10);
  //   body.passkey = hashSync(body.passkey, salt);
  //   create(body, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).json({
  //         success: 0,
  //         message: "Database connection error",
  //       });
  //     }
  //     return res.status(200).json({
  //       success: 1,
  //       data: results,
  //     });
  //   });
  // },

  // getAllUsers: (req, res) => {
  //   getUsers((err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).json({
  //         success: "false",
  //         message: "database error",
  //       });
  //     }
  //     return res.status(200).json({
  //       success: "true",
  //       data: results,
  //     });
  //   });
  // },

  // getUsersByUserId: (req, res) => {
  //   const body = req.body;
  //   getUsersById(body, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).json({
  //         success: "false",
  //         message: "error in getting users by id",
  //       });
  //     }
  //     return res.status(200).json({
  //       success: "true",
  //       data: results,
  //     });
  //   });
  // },

  // updateUserById: (req, res) => {
  //   const body = req.body;
  //   const salt = genSaltSync(10);
  //   body.passkey = hashSync(body.passkey, salt);
  //   updateUser(body, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).json({
  //         success: "false",
  //         message: "database error",
  //       });
  //     }
  //     return res.status(200).json({
  //       success: "false",
  //       data: "User Updated!!",
  //     });
  //   });
  // },

  // deleteUserById: (req, res) => {
  //   const body = req.body;
  //   deleteUser(body, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).json({
  //         success: "false",
  //         message: "connection error",
  //       });
  //     }
  //     return res.status(200).json({
  //       success: "true",
  //       data: "User Deleted",
  //     });
  //   });
  // },

  AllOperations: (req, res) => {
    const body = req.body;
    AllFunction(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
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
