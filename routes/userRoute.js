const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const User = require("../models/user");

//patch
router.patch("/", userController.updateInfo);
//delete by id
router.delete("/", userController.deleteUser);

module.exports = router;
