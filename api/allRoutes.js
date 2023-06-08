const { Router } = require('express');
const brandRoutes = require('./brands/brand.routes');
const productRoutes = require('./products/product.routes');


// Import other route modules here if needed

function initializeRoutes() {
  const router = Router();


 
//Brands routes

  router.use('/brands', brandRoutes);

//Products routes

  router.use('/products', productRoutes);

  

  return router;
}

module.exports = initializeRoutes;
