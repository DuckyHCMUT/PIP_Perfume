const { Router } = require("express");
const authController = require("../controllers/authControllers.js");
const router = Router();
const auth = require("../middleware/authen.js");

router.post("/register", authController.signup);
router.post("/login", authController.login);
router.get("/user", auth, authController.get_user);
router.get("/usercount", authController.get_user_count);

module.exports = router;
