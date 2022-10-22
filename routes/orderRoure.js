const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const Order = require("../models/order");
const { auth } = require("../middleware/auth");
const { application } = require("express");
//make order
router.post("/", auth, orderController.addOrder);
//get by id
router.get("/:id", auth, orderController.getById);
//delete by id
router.delete("/:id", auth, orderController.deleteOrder);
// get all orders
// router.get("/", auth, orderController.getAllOrders);
module.exports = router;
