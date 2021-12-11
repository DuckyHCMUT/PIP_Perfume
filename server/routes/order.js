const { Router } = require("express");
const orderController = require("../controllers/orderControllers.js");
const router = Router();

router.get("/order/:id", orderController.get_orders);
router.put("/order/:id", orderController.update_order);
router.get("/orders", orderController.get_all_orders);
router.post("/order", orderController.create_order);
//router.post("/order/:id", orderController.checkout);

module.exports = router;
