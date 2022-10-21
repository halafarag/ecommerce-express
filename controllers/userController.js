const User = require("../models/user");
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
module.exports = { updateInfo, deleteUser };
