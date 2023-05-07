const orderDao = require('../models/orderDao');

const modifyOrderCount = async (foodId, quantity, userId) => {
    try {
        const doubleCheck = await orderDao.checkQuantity(foodId, quantity, userId);

        if(!doubleCheck) return await orderDao.modifyOrderCount(foodId, quantity, userId);
        
    } catch (err){
        const error = new Error('Could Not Make Changes');
        error.statusCode = 404;
        throw error;
    };
};

const deleteOrder = async(deleteOrderItem, userId) =>{
    try {
        for(let i = 0; i <= deleteOrderItem.length - 1; i++) {
            const product = deleteOrderItem[i].foodId;
            await orderDao.deleteOrderItem(product, userId);
        };
    } catch (err) {
        const error = new Error('COULD NOT DELETE DATA');
        error.statusCode = 404;
        throw error;
    }
};

module.exports = { modifyOrderCount, deleteOrder };
