const productDao = require("../models/productDao");

const filter = async (
  orderBy,
  countryId,
  spiceLevel,
  allergyId,
  meatId,
  limit,
  offset
) => {
  const filter = await productDao.filter(
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
  filter,
};
