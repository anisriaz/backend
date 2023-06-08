const mongoose = require("mongoose");
const Schema = mongoose.Schema

const brandsSchema = new mongoose.Schema({
  Name: String,
  description: String,
  price: Number,
  imgUrl: String,
});

const brands = mongoose.model("brands", brandsSchema);

module.exports = brands;