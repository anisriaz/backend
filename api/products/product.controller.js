const Product = require("./product.model");

// Get all product API logic
const getAllProducts = async (req, res) => {
  try {
    const productsList = await Product.find();
    res.json(productsList);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Create product API logic

const createProduct = async (req, res) => {
  try {
    const savedProduct = await Product.create(req.body);
    res.json(savedProduct);
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).send(error);
  }
};



// const createProduct = async (req, res) => {
//   try {
//     const savedProduct = await Product.create(req.body);
//     res.json(savedProduct);
//   } catch (error) {
//     console.error("Error saving product:", error);
//     res.status(500).send(error);
//   }
// };

// Delete product API logic


const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    await Product.findByIdAndDelete(productId);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send(error);
  }
};




module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
 
 
};