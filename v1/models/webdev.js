const mongoose = require("mongoose");

const webDevSchema = new mongoose.Schema({
   name: String,
   site: String,
   tools: String,
   description: String,
   creditAt: {type: Date, default: Date.now},
   active: Boolean
});

module.exports = mongoose.model("Website", webDevSchema);