const paymentService = require("../services/paymentService");
const { catchAsync } = require("../utils/error");

const getUserCartInfo = catchAsync(async (req, res) => {
  const user = req.user;
  const foodIds = req.body;
  console.log(`1111111111`, foodIds);

  const result = await paymentService.getUserCartInfo(user, foodIds);

  if (!result) {
    error = new Error("CART_NOT_FOUND!!");
    error.statusCode = 404;
    throw error;
  }
  return res.status(200).json(result);
});

const payment = catchAsync(async (req, res) => {
  const user = req.user;
  const { point } = req.body;
  if (!point) {
    error = new Error("KEY_ERROR!");
    error.statusCode = 400;
    throw error;
  }
  const result = await paymentService.payment(user, point);
  if (!result) {
    error = new Error("ORDER_FAILED!");
    error.statusCode = 400;
    throw error;
  }
  return res.status(200).json({ message: "ORDER_SUCCESS!" });
});

module.exports = {
  getUserCartInfo,
  payment,
};
