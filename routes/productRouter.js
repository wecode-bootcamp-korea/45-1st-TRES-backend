const express = require("express");

const productController = require("../controllers/productController");

const router = express.Router();

router.get('', productController.getProducts);
router.get("", productController.getProductsById);

module.exports = {
  router,
};

module.exports = { router };