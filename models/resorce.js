const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    
  });


  const user = mongoose.model("user", userSchema);

  module.exports = user;