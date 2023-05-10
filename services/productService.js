const productDao = require("../models/productDao");

const getRandomProducts = async (offset, limit) => {
  return await productDao.getRandomProducts(offset, limit);
};

const getAllProducts = async (
  orderBy,
  countryId,
  spiceLevel,
  allergyId,
  meatId,
  vegetarian,
  limit,
  offset
) => {
  const getAllProducts = await productDao.getAllProducts(
    orderBy,
    countryId,
    spiceLevel,
    allergyId,
    meatId,
    vegetarian,
    limit,
    offset
  );

  const [getCountries] = await productDao.getCountries(countryId);
  getAllProducts.push(getCountries);
  console.log(getAllProducts);

  return getAllProducts;
};

const getProductInfo = async (foodId) => {
  const [getProductInfo] = await productDao.getProductInfo(foodId);

  return getProductInfo;
};

module.exports = {
  getRandomProducts,
  getProductInfo,
  getAllProducts,
};
