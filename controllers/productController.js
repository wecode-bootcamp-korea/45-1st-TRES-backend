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

module.exports = { getProducts };