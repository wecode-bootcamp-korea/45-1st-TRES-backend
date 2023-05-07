const productDao = require('../models/productDao');

const getRandomProducts = async (offset, limit) => {
        return await productDao.getRandomProducts(offset, limit);
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
        getRandomProducts, 
        getProductsById
};
