const mongoose = require("mongoose");
const { Schema } = mongoose;

const productShema = new Schema({
  name: {
    type: String,
    minLength: 4,
    maxLength: 100,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  productUrl: {
    type: String,
    required: true,
    trim: true,
  },
  sellerId: {
    type: mongoose.Schema.ObjectId,
    ref: "seller",
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
});

const productModel = mongoose.model("Product", productShema);
module.exports = productModel;
