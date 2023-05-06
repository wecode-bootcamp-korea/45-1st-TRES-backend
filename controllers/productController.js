const productService = require('../services/productService');

const getMainProducts = async (req, res) => {
    try{
        const { count } = req.body;
        const mainPage = await productService.getMainProducts(count);
        return res.status(200).json({ mainPage });
    } catch(err){
        return res.status(err.statusCode || 400).json({ message:err.message });
    };
};

module.exports = { getMainProducts } ;