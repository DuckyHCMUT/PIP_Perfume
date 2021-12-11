const { Router } = require("express");
const cartController = require("../controllers/cartControllers.js");
const router = Router();

router.get("/cart/:id", cartController.get_cart_items);
router.post("/cart/:id", cartController.add_cart_item);
router.put("/cart/:id", cartController.update_cart_item);
router.delete("/cart/:userId/:itemId/:optionId", cartController.delete_item);

module.exports = router;