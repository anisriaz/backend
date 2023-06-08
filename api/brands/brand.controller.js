const brands = require("./brand.model");


const getAllBrands = async (req, res) => {
  try {
    const allBrands = await brands.find();
    res.json(allBrands);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllBrands
};


  