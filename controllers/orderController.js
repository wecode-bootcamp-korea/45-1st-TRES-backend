const orderService = require('../services/orderService');

// const deleteProductsFromOrder = async (req, res) => {
//     try {
//         await orderService.deleteFromOrder();

//     } catch(err) {
//         return res.status(err.statusCode || 400). json({ message: err.message });
//     };
// };

const modifyOrder = async (req, res) => {
    try {
        //get userId from jwt

        const { foodId, quantity } = req.body;
        // const token = req.headers.authorization;
        // if(!token) return res.status(403).json({ message: "NOT AUTHORIZED" });
        // const verified = jwt verify(token, process.env.JWT_SECRETKEY);
        // const userId = verified.id

        await orderService.modifyOrder(foodId, quantity, userId);

        return res.status(statusCode || 200).json({ message: "ORDER MODIFIED" });
        
    } catch(err) {
        return res.status(err.statusCode || 400).json({ message: err.message });
    };
};

module.exports = { modifyOrder };