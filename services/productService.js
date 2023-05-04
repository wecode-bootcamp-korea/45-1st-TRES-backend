const productDao = require("../models/productDao");

const filter = async (orderBy, countryId, spiceLevel) => {
  const filter = await productDao.filter(orderBy, countryId, spiceLevel);

  return filter;
};

module.exports = {
  filter,
};
