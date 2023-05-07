const productService = require('../services/productService');

const getRandomProducts = async (req, res) => {
    try{
        const { from, count } = req.body;
        const DEFAULT_OFFSET = 1;
        const DEFAULT_LIMIT = 10;
        const offset = from ? from : DEFAULT_OFFSET; 
        const limit = count ? count : DEFAULT_LIMIT;
        const mainPage = await productService.getRandomProducts(offset, limit);
        return res.status(200).json({ mainPage });
    } catch(err){
        return res.status(err.statusCode || 400).json({ message: "INVALID KEY" });
    };
};

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

module.exports = {
  getRandomProducts,
  getProductsById,
};
