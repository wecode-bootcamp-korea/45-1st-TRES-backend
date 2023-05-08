const express = require("express");

const productController = require("../controllers/productController");

const router = express.Router();

router.get('', productController.getRandomProducts);
router.get("", productController.getProductsById);

module.exports = {
  router,
};
