const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const Product = require("../models/product");
//getBySkip
router.get("/", productController.getBySkip);
//getAllProduct
router.get("/", productController.getAllProduct);
//addProduct
router.post("/", productController.addProduct);

//patch
router.patch("/", productController.updateProduct);
//delete
router.delete("/", productController.deleteUser);
//get by id
router.get("/", productController.getById);
module.exports = router;
