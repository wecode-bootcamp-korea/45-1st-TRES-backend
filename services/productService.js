const productDao = require('../models/productDao');

const getRandomProducts = async (offset, limit) => {
        return await productDao.getRandomProducts(offset, limit);
};


module.exports = { getRandomProducts } ;  