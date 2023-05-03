const productDao = require("../models/productDao");

const viewCountries = async (countryId) => {
  const viewCountries = await productDao.viewCountries(countryId);

  return viewCountries;
};

module.exports = {
  viewCountries,
};
