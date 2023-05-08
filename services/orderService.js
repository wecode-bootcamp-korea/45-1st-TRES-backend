const orderDao = require("../models/orderDao");

const modifyOrderCount = async (foodId, quantity, userId) => {
        return await orderDao.modifyOrderCount(foodId, quantity, userId);
};

const deleteOrder = async(deleteOrderItem, userId) =>{
    try {
        for(let i = 0; i <= deleteOrderItem.length - 1; i++) {
            let food_id = deleteOrderItem[i].foodId;
            await orderDao.deleteOrderItems(food_id, userId);
        }
    } catch (err) {
        const error = new Error("COULD NOT DELETE DATA");
        error.statusCode = 404;
        throw error;
    }
};

module.exports = { modifyOrderCount, deleteOrder };
