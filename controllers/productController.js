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

module.exports = { getRandomProducts };