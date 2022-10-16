const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const db = process.env.DB.replace(
  "<userName>",
  process.env.DB_USERNAME
).replace("<password>", process.env.DB_PASSWORD);

mongoose.connect(db).then(() => {
  console.log("you connected to mongoDB");
});
const PORT = process.env.PORT || 5000;

const app = express();
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
