const orderDao = require('../models/orderDao');

const modifyOrder = async (foodId, quantity, userId) => {
    try {
        if( !quantity ) return await orderDao.deleteOrderItem(foodId, userId);

        return await orderDao.changeQuantity(foodId, quantity, userId);
    } catch (err){
        const error = new Error('Could Not Make Changes');
        error.statusCode = 404;
        throw error;
    };
};

const deleteOrder = async(deleteOrderItem, userId) =>{
    try {
        const len = deleteOrderItem.length;
        const product = deleteOrderItem[0].foodId;
        if(len == 1) return await orderDao.deleteOrderItem(product, userId);

        for(let i = 0; i <= deleteOrderItem.length - 1; i++) {
            const product = deleteOrderItem[i].foodId;
            await orderDao.deleteSingleItem(product, userId);
        };
    } catch (err) {
        const error = new Error('COULD NOT DELETE DATA');
        error.statusCode = 404;
        throw error;
    }
};

module.exports = { modifyOrder, deleteOrder };
