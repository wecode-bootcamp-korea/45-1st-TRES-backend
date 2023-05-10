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

  let foodArray = [];
  for (let i = 0; i < result.length; i++) {
    foodArray.push(result[i].food);
  }

  return res.status(200).json({
    userId: result[0].userId,
    email: result[0].email,
    lastName: result[0].lastName,
    firstName: result[0].firstName,
    phoneNumber: result[0].phoneNumber,
    address: result[0].address,
    point: result[0].point,
    food: foodArray,
  });
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
