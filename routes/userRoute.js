const { Router } = require("express");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const User = require("../models/user");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

//patch
router.patch("/", userController.updateInfo);
//delete by id
router.delete("/:id", userController.deleteUser);
//creat new user
router.post("/", userController.addUser);
//login
router.post("/login", userController.login);
//get all users
router.get("/", userController.getAllUsers);

module.exports = router;
