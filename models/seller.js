const mongoose = require("mongoose");

const { Schema } = mongoose;
const sellerSchema = new Schema({
  name: {
    type: String,
    minLength: 4,
    maxLength: 100,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    minLength: 4,
    maxLength: 100,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  products: [{ type: mongoose.Schema.ObjectId, ref: "Product" }],
});

const Seller = mongoose.model("Seller", sellerSchema);
module.exports = Seller;
