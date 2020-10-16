const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profilImage: {
    type: String,
    default: "https://i.ibb.co/WcmZNYj/avatar-1577909-960-720.png",
  },
  isAdmin: {
    type: Boolean,
    default: "false",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
