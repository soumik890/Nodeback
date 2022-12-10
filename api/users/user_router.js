const {
  createUser,
  getAllUsers,
  getUsersByUserId,
  updateUserById,
  deleteUserById,
  AllOperations,
} = require("./user_controller");
const router = require("express").Router();

// const { checktoken } = require("../../auth/token_validation");

// router.post("/", checktoken, AllOperations);
router.post("/", AllOperations);

module.exports = router;
