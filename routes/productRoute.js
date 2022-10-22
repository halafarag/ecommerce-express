const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { auth } = require("../middleware/auth");
const Product = require("../models/product");
//getBySkip
router.all("/", (req, res, next) => {
  req.ahmed = "maher";
  next();
});
// router.get("/", productController.getBySkip);
//getAllProduct
router.get("/", productController.getAllProduct);
//addProduct
router.post("/", auth, productController.addProduct);
//patch
router.patch("/:id", auth, productController.updateProduct);
//delete
router.delete("/:id", auth, productController.deleteProduct);
//get by id
router.get("/:id", auth, productController.getById);
module.exports = router;
