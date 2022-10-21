const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const Product = require("../models/product");
//getBySkip
router.all("/", (req, res, next) => {
  req.ahmed = "maher";
  next();
});
router.get("/", productController.getBySkip);
//getAllProduct
router.get("/", productController.getAllProduct);
//addProduct
router.post("/", productController.addProduct);
//patch
router.patch("/:id", productController.updateProduct);
//delete
router.delete("/:id", productController.deleteProduct);
//get by id
router.get("/:id", productController.getById);
module.exports = router;
