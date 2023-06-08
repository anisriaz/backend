const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imagurl: String,
  showHome: String,
  category: String,
  brand: String,
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
