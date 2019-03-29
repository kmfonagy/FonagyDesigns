const mongoose = require("mongoose");

const graphDesSchema = new mongoose.Schema({
   name: String,
   image: String,
   site: String,
   description: String,
   creditAt: {type: Date, default: Date.now},
   active: Boolean
});

module.exports = mongoose.model("Designs", graphDesSchema);