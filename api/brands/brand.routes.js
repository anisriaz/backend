const { Router } = require("express");
const controller = require("./brand.controller");
const brands = require("./brand.model");

// Create a new router instance
const router = Router();

// Define the route handlers
router.get("/", controller.getAllBrands);

module.exports = router;





































// app.get("/api/brands", async (req, res) => {
//   try {
//     const brandList = await Brand.find();
//     res.json(brandList);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });






