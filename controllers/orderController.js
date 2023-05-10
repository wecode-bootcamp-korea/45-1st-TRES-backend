const orderService = require("../services/orderService");
const { catchAsync } = require("../utils/error")

const modifyOrderCount = catchAsync(async (req, res) => {

  const user = req.user;
  const userId = user.id;
  const { foodId, quantity } = req.body;

  if(!foodId && !quantity) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }

  await orderService.modifyOrderCount(foodId, quantity, userId);
  return res.status(200).json({ message: "ORDER MODIFIED" });
   
});

const deleteOrder = catchAsync(async (req, res) => {
  const user = req.user;
  const userId = user.id;
  const { deleteOrderItem } = req.body;
  
  if(!deleteOrderItem) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }

  const result = await orderService.deleteOrder(deleteOrderItem, userId);
  if(result) return res.status(200).json({ message: "ORDER DELETED" });
    
  return res.status(400).json({ message: "NO MODIFICATIONS MADE" })
});

module.exports = { modifyOrderCount, deleteOrder };