const { Router } = require("express");
const controller = require("./product.controller");
// const multer = require('multer');
// const upload = require('./config/multerconfig');


const router = Router();

// Define the route handlers
router.get("/", controller.getAllProducts);

router.post('/create', controller.createProduct);




router.delete("/delete/:id", controller.deleteProduct);

module.exports = router; 