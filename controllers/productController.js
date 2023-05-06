const productService = require('../services/productService');

const getMainPage = async (req, res) => {
    try{
        const mainPage = await productService.getMainPage();
        return res.status(200).json({ mainPage });
    } catch(err){
        return res.status(err.statusCode || 400).json({ message:err.message });
    };
};


module.exports = { getMainPage } ;