const mongoose = require("mongoose");

const resSchema = new mongoose.Schema({
   name: String,
   site: String,
   image: String
});

module.exports = mongoose.model("Resource", resSchema);