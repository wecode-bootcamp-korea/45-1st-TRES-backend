const productDao = require('../models/productDao');

const getProducts = async (quantity) => {
        return await productDao.getProducts(quantity);
};

const getProductsById = async (
  orderBy,
  countryId,
  spiceLevel,
  allergyId,
  meatId,
  limit,
  offset
) => {
  const filter = await productDao.getProductsById(
    orderBy,
    countryId,
    spiceLevel,
    allergyId,
    meatId,
    limit,
    offset
  );

  return filter;
};

module.exports = {
  getProductsById,
};
