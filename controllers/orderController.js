const orderService = require("../services/orderService");
const { catchAsync } = require("../utils/error");

const addCart = catchAsync(async (req, res) => {
  const user = req.user;
  const products = req.body;
  const result = await orderService.addCart(user, products);
  if (!result) {
    error = new Error("ADD_CART_CONTROLLER_ERROR");
    error.statusCode = 400;
    throw error;
  }
  return res.status(200).json({ message: "ADD_CART_SUCCESS" });
});

const getCart = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await orderService.getCart(user);
  if (!result) {
    error = new Error("GET_CART_CONTROLLER_ERROR");
    error.statusCode = 400;
    throw error;
  }
  return res.status(200).json(result);
});

const modifyOrderCount = catchAsync(async (req, res) => {
  const user = req.user;
  const userId = user.id;
  const { foodId, quantity } = req.body;

  if (!foodId && !quantity) {
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
  
  if (!deleteOrderItem) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }

  const result = await orderService.deleteOrder(deleteOrderItem, userId);
  if (result) return res.status(200).json({ message: "ORDER DELETED" });

  return res.status(400).json({ message: "NO MODIFICATIONS MADE" });
});

module.exports = { addCart, getCart, modifyOrderCount, deleteOrder };
