const express = require("express");
var router = express.Router();
var Seller = require("../models/seller");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const sellerController = require("../controllers/sellerController");
// router.get("/", (req, res) => {
//   res.json([1, 2, 3]);
// });
router.get("/:id", (req, res) => {
  res.json({ userName: "hala" });
});
////add new seller
router.post("/", sellerController.addSeller);
/////login
router.post("/login", sellerController.login);
//get all sellers
router.get("/", sellerController.getAllSellers);
module.exports = router;
