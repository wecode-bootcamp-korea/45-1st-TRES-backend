const productService = require("../services/productService");
const { catchAsync } = require("../utils/error");

const getAllProducts = catchAsync(async (req, res) => {
  const { orderBy, countryId, spiceLevel, allergyId, meatId, limit, offset } =
    req.query;

  // if (!countryId) {
  //   const error = new Error("KEY_ERROR");
  //   error.statusCode = 400;
  //   throw error;
  // }

  const result = await productService.getAllProducts(
    orderBy,
    countryId,
    spiceLevel,
    allergyId,
    meatId,
    limit,
    offset
  );
  return res.status(200).json({ data: result });
});

const getProductInfo = catchAsync(async (req, res) => {
  const { foodId } = req.params;

  if (!foodId) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }

  const result = await productService.getProductInfo(foodId);
  return res.status(200).json({ data: result });
});

module.exports = {
  getAllProducts,
  getProductInfo,
};
