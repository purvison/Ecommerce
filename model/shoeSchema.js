const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;
