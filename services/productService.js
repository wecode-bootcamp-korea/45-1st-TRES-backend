const productDao = require("../models/productDao");

const getAllProducts = async (
  orderBy,
  countryId,
  spiceLevel,
  allergyId,
  meatId,
  limit,
  offset
) => {
  const getAllProducts = await productDao.getAllProducts(
    orderBy,
    countryId,
    spiceLevel,
    allergyId,
    meatId,
    limit,
    offset
  );

  return getAllProducts;
};

const getProductInfo = async (foodId) => {
  const getProductInfo = await productDao.getProductInfo(foodId);

  return getProductInfo;
};

module.exports = {
  getAllProducts,
  getProductInfo,
};
