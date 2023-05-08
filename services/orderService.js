const orderDao = require("../models/orderDao");

const modifyOrderCount = async (foodId, quantity) => {
    try {
        //double check if quantity in request body is greater than order_count
        const doubleCheck = await orderDao.checkQuantity(foodId, quantity, userId);

        if(!doubleCheck) return await orderDao.modifyOrderCount(foodId, quantity, userId);
        
        return res.status(400).json({ message: "INVALID QUANTITY" });

    } catch (err){
        const error = new Error("COULD NOT MAKE CHANGES");
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
        const error = new Error("COULD NOT DELETE DATA");
        error.statusCode = 404;
        throw error;
    }
};

module.exports = { modifyOrderCount, deleteOrder };
