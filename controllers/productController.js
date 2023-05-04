const productService = require("../services/productService");

const filter = async (req, res) => {
  try {
    const { orderBy, countryId, spiceLevel, allergyId, meatId, limit, offset } =
      req.query;

    const result = await productService.filter(
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

module.exports = {
  filter,
};
