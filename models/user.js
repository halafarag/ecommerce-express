const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    minLength: 4,
    maxLength: 100,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    minLength: 4,
    maxLength: 100,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});
//hash password
userSchema.pre("save", function (next) {
  const slalt = bcrypt.genSaltSync(7);
  const hash = bcrypt.hashSync(this.password, slalt);
  this.password = hash;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
