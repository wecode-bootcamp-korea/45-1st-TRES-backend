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

  return getAllProducts;
};

const getProductInfo = async (foodId) => {
  const [getProductInfo] = await productDao.getProductInfo(foodId);

  return getProductInfo;
};

const getCategories = async() => {

  const result = await productDao.getCategories();
  let categories = [];

  result.map((el)=>{
    categories.push(el.categories);
  })

  return categories;
}

module.exports = {
  getRandomProducts,
  getProductInfo,
  getAllProducts,
  getCategories
};
