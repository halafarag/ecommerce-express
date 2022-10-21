const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//patch update his info
async function updateInfo(req, res) {
  try {
    var id = req.params.id;
    const updatedInfo = req.body;
    var newInfo = await User.findByIdAndUpdate(id, updatedInfo, {
      new: true,
    });
    res.status(200).json(newInfo);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
//delete by id
async function deleteUser(req, res) {
  try {
    var id = req.params.id;
    var deletedUser = await Product.findByIdAndDelete(id);
    res.status(204).json(deletedUser);
  } catch (err) {
    res.status(422).json({ status: "failed", message: `${err.message}` });
  }
}
//add new user
async function addUser(req, res) {
  try {
    var newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(422).json(err.message);
  }
}
//login
async function login(req, res, next) {
  const { userName, password } = req.body;

  var user = await User.findOne({ userName: userName }).exec();

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
//get all users
async function getAllUsers(req, res, next) {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json(err.message);
  }
}
module.exports = { updateInfo, deleteUser, addUser, login, getAllUsers };
