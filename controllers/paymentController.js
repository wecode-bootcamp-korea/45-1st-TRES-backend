const paymentService = require("../services/paymentService");
const { catchAsync } = require("../utils/error");

const getUserCartInfo = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await paymentService.getUserCartInfo(user);
  if (!result) {
    error = new Error("CONTROLLER!!");
    error.statusCode = 400;
    throw error;
  }
  return res.status(200).json(result);
});

const updateOrderStatusOrderNumberPoints = catchAsync(async (req, res) => {
  // const { point } = req.body;
  const user = req.user;
  const result = await paymentService.updateOrderStatusOrderNumberPoints(user);
  if (!result) {
    error = new Error("ORDER_FAILED!");
    error.statusCode = 400;
    throw error;
  }
  return res.status(200).json({ message: "ORDER_SUCCESS!" });
});

module.exports = {
  getUserCartInfo,
  updateOrderStatusOrderNumberPoints,
};
