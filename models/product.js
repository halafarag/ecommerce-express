const mongoose = require("mongoose");
const { Schema } = mongoose;

const productShema = new Schema({
  name: {
    type: String,
    minLength: 4,
    maxLength: 100,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
  },
  productImgUrl: {
    type: String,
    trim: true,
  },
  sellerId: {
    type: mongoose.Schema.ObjectId,
    ref: "Seller",
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model("Product", productShema);
module.exports = Product;
