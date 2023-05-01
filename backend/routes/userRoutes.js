const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

const { protect } = require("../middleWare/authMiddleWare");

router.post("/", registerUser);
router.post("/Login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
