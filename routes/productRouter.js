const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("", productController.getAllProducts);
router.get("/:foodId", productController.getProductInfo);

module.exports = {
  router,
};
