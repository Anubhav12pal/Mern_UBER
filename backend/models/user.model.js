const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: [3, "First name must be atleast 3 characters long"],
  },
  lastname: {
    type: String,

    required: true,
    minlength: [2, "Last name must be atleast 2 characters long"],
  },
  email: {
    type: String,
    required: true,

    unique: true,
    minlength: [5, "Email must be atleast 5 characters long"],
  },
  passord: {
    type: String,
    required: true,
    minlength: [8, "Password must be atleast 8 characters long"],
  },

  socketId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;