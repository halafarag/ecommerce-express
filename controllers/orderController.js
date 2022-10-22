const Order = require("../models/order");
const User = require("../models/user");

//add new order
async function addOrder(req, res) {
  try {
    const user = await User.findById(req.userId);
    console.log(req.userId);
    if (user) {
      var newOrder = await Order.create(req.body);
      res.json(newOrder);
    } else {
      res.json("you not authenticated");
    }
  } catch (err) {
    res.status(422).json(err.message);
  }
}

//get by id
async function getById(req, res) {
  try {
    const user = await User.findById(req.userId);
    if (user) {
      var ordertId = req.params.id;

      var found = await Order.findById(ordertId);
      if (found.userId == req.userId) {
        res.status(200).json(found);
      } else {
        res.status(422).json("this order not belong to you");
      }
    } else {
      res.status(422).json("you not authenticated");
    }
  } catch (err) {
    res.status(422).json(err);
  }
}
//delete by id
async function deleteOrder(req, res) {
  try {
    const user = await User.findById(req.userId);
    if (user) {
      var ordertId = req.params.id;

      var found = await Order.findById(ordertId);
      if (found.userId == req.userId) {
        const deleteOrder = await Order.findByIdAndDelete(ordertId);
        res.status(200).json("your order has been deleted");
      } else {
        res.status(422).json("this order not belong to you");
      }
    } else {
      res.status(422).json("you not authenticated");
    }
  } catch (err) {
    res.status(422).json(err);
  }
}

module.exports = { addOrder, getById, deleteOrder };
