const mongoose = require("mongoose");
const { Schema } = mongoose;
const orderSchema = new Schema({
  products: [{ type: mongoose.Schema.ObjectId, ref: "Product" }],
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
});
const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
