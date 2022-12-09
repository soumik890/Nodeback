const {
  createUser,
  getAllUsers,
  getUsersByUserId,
  updateUserById,
  deleteUserById,
  AllOperations,
} = require("./user_controller");
const router = require("express").Router();

// router.post("/", createUser);
// router.post("/", getAllUsers);
// router.post("/", getUsersByUserId);
// router.post("/", updateUserById);
// router.post("/", deleteUserById);
router.post("/", AllOperations);

module.exports = router;
