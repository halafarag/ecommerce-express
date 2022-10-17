const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const Product = require("../models/product");
//getAllProduct
router.get("/", productController.getAllProduct);
//addProduct
router.post("/", productController.addProduct);

module.exports = router;
