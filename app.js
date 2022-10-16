const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect("mongodb://localhost:27017/Ecommerce").then(() => {
  console.log("you connected to mongoDB");
});
const PORT = process.env.PORT || 5000;

const app = express();
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
