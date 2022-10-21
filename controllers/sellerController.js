const Seller = require("../models/seller");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//add new seller
async function addSeller(req, res) {
  try {
    var newSeller = await Seller.create(req.body);
    res.json(newSeller);
  } catch (err) {
    res.status(422).json(err.message);
  }
}
//login
async function login(req, res, next) {
  const { userName, password } = req.body;

  var user = await Seller.findOne({ userName: userName }).exec();

  if (user) {
    var valid = bcrypt.compareSync(password, user.password);

    if (valid) {
      // res.json("authentication");
      var token = jwt.sign(
        {
          data: { userName: user.userName, userId: user.id },
        },
        process.env.SECRET,
        { expiresIn: "1h" }
      );
      res.json(token);
    } else {
      res.status(401).json("please insert correct pass");
    }
  } else {
    res.status(401).json("user name is invaild");
  }
}
//get all sellers
async function getAllSellers(req, res, next) {
  try {
    const allSellers = await Seller.find();
    res.status(200).json(allSellers);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

module.exports = { addSeller, login, getAllSellers };
