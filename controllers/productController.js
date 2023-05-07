const productService = require('../services/productService');

const getProducts = async (req, res) => {
    try{
        const { count } = req.body;
        const quantity = count ? count : 10;
        const mainPage = await productService.getProducts(quantity);
        return res.status(200).json({ mainPage });
    } catch(err){
        return res.status(err.statusCode || 400).json({ message:err.message });
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
  getProducts,
  getProductsById
};

