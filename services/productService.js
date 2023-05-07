const productDao = require('../models/productDao');

const getProducts = async (quantity) => {
        return await productDao.getProducts(quantity);
};

module.exports = { getProducts } ;  