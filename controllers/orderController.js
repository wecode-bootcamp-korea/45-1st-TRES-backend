const orderService = require('../services/orderService');

const modifyOrderCount = async (req, res) => {
    try {
        //get userId from jwt
        const { foodId, quantity } = req.body;
        // const token = req.headers.authorization;
        // if(!token) return res.status(403).json({ message: "NOT AUTHORIZED" });
        // const verified = jwt verify(token, process.env.JWT_SECRETKEY);
        // const userId = verified.id
        await orderService.modifyOrderCount(foodId, quantity, userId);
        return res.status(statusCode || 200).json({ message: "ORDER MODIFIED" });
    } catch(err) {
        return res.status(err.statusCode || 400).json({ message: "INVALID KEY" });
    };
};

const deleteOrder = async (req, res) => {
    try{
        const { deleteOrderItem } = req.body;
        //const userId = 
        //get userId
        await orderService.deleteOrder(deleteOrderItem, userId);
        return res.status(statusCode || 200).json({ message: "ORDER DELETED" });
    } catch(err) {
        return res.status(err.statusCode || 400).json({ message: "INVALID KEY" });
    };
};

module.exports = { modifyOrderCount, deleteOrder };