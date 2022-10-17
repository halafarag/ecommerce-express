const Product = require("../models/product");
async function getAllProduct(req, res, next) {
  try {
    const allProduct = await Product.find();
    res.status(200).json(allProduct);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

//addProduct
async function addProduct(req, res, next) {
  try {
    const newProduct = req.body;
    const result = await Product.create(newProduct);
    res.status(201).json(result);
  } catch (err) {
    res.status(422).json(err);
  }
}
module.exports = { getAllProduct, addProduct };
