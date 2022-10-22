const Product = require("../models/product");
const Seller = require("../models/seller");
//get all product
async function getAllProduct(req, res, next) {
  try {
    // products?seller=ahmed
    let filter = {};
    const { seller: sellerName, name: productName } = req.query;

    if (sellerName) {
      let seller = await Seller.findOne({ name: sellerName });
      // {sellerId : seller._id}
      filter.sellerId = seller._id;
    }
    // {}
    //  {sellerId : seller._id,name:productName}
    if (productName) filter.name = productName;
    //  {sellerId : seller._id}
    // {}

    const allProduct = await Product.find(filter);
    res.status(200).json(allProduct);
  } catch (err) {
    res.status(500);
    next(err);
  }
}
//get using skip and limit
async function getBySkip(req, res, next) {
  try {
    var skip = parseInt(req.query.skip);
    var limit = parseInt(req.query.limit);
    console.log(skip, limit);
    if (!limit && !skip) {
      next();
    } else {
      let results = await Product.find()
        .limit(limit ? limit : 0)
        .skip(skip ? skip : 0);
      res.status(200).json(results);
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
}

//addProduct
async function addProduct(req, res, next) {
  try {
    const seller = await Seller.findById(req.userId);
    if (seller) {
      const newProduct = req.body;
      newProduct.sellerId = seller._id;
      const result = await Product.create(newProduct);
      seller.products.push(result.id);
      await seller.save();

      res.status(201).json(result);
    } else {
      throw new Error("you Need to be A seller ");
    }
  } catch (err) {
    res.status(422);
    next(err);
  }
}
//patch
async function updateProduct(req, res, next) {
  try {
    // if there is a seller and seller products containt the product id
    // do the action
    //throw new error  else un authrized to do yjay
    const seller = await Seller.findById(req.userId);
    var id = req.params.id;
    if (seller && seller.products.includes(id)) {
      const updatedProduct = req.body;
      var newProduct = await Product.findByIdAndUpdate(id, updatedProduct, {
        new: true,
      });
      res.status(200).json(newProduct);
    } else {
      throw new Error("you need to be A seller ");
    }
  } catch (err) {
    res.status(500);
    next(err);
  }
}
//delete by id
async function deleteProduct(req, res) {
  try {
    var id = req.params.id;
    var deletedProduct = await Product.findByIdAndDelete(id);
    res.status(204).json(deletedProduct);
  } catch (err) {
    res.status(422).json({ status: "failed", message: `${err.message}` });
  }
}
//get by id
async function getById(req, res) {
  try {
    var productId = req.params.id;
    var found = await Product.findById(productId);
    res.status(200).json(found);
  } catch (err) {
    res.status(422).json(err);
  }
}

module.exports = {
  getAllProduct,
  addProduct,
  getBySkip,
  updateProduct,
  deleteProduct,
  getById,
};
