const productDao = require('../models/productDao');

const getMainPage = async () => {
    try {
        return await productDao.getMainPage();

    } catch(err){ 
        const error = new Error('CANNOT GET DATA');
        error.statusCode = 400;
        throw error;
    }
}


module.exports = {getMainPage } ;  