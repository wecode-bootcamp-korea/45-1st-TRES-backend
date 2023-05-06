const productDao = require('../models/productDao');

const getMainProducts = async (count) => {
        return await productDao.getMainProducts(count);
};


module.exports = { getMainProducts } ;  