const productService = require("../services/productService");

const getProductsById = async (req, res) => {
  try {
    const { orderBy, countryId, spiceLevel, allergyId, meatId, limit, offset } =
      req.query;

    const result = await productService.getProductsById(
      orderBy,
      countryId,
      spiceLevel,
      allergyId,
      meatId,
      limit,
      offset
    );
    return res.status(200).json({ data: result });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getProductInfo = async (req, res) => {
  try {
    const { foodId } = req.params;

    const result = await productService.getProductInfo(foodId);
    return res.status(200).json({ data: result });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getProductsById,
  getProductInfo,
};
