const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/authController");
const authenticateUser = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", authenticateUser, (req, res) => res.json({ user: req.user }));

module.exports = router;
