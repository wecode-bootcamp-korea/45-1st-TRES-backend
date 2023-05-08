const orderService = require("../services/orderService");
const { catchAsync } = require("../utils/error")

const modifyOrderCount = catchAsync(async (req, res) => {

  const { foodId, quantity } = req.body;

  if(!foodId && !quantity) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }

  await orderService.modifyOrderCount(foodId, quantity);
  return res.status(statusCode || 200).json({ message: "ORDER MODIFIED" });
   
});

const deleteOrder = catchAsync(async (req, res) => {

  const { deleteOrderItem } = req.body;
  
  if(!deleteOrderItem) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }

  await orderService.deleteOrder(deleteOrderItem);
  return res.status(statusCode || 200).json({ message: "ORDER DELETED" });
    
});

module.exports = { modifyOrderCount, deleteOrder };