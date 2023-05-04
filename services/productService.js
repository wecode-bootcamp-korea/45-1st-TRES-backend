const productDao = require("../models/productDao");

// const viewCountries = async (countryId) => {
//   const viewCountries = await productDao.viewCountries(countryId);

//   return viewCountries;
// };

const filter = async (countryId, spiceLevel) => {
  const filter = await productDao.filter(countryId, spiceLevel);

  return filter;
};

module.exports = {
  //viewCountries,
  filter,
};
