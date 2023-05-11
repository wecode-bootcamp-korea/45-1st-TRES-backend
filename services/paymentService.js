const paymentDao = require("../models/paymentDao");

const getUserCartInfo = async (user, foodIds) => {
  const userInfoResult = await paymentDao.getUserInfo(user);
  if (!userInfoResult) {
    const error = new Error("USER_INFO_NOT_FOUND");
    error.statusCode = 409;
    throw error;
  }
  const foodInfoResult = await paymentDao.getCartFoodInfo(user, foodIds);
  if (!foodInfoResult) {
    const error = new Error("FOOD_INFO_NOT_FOUND");
    error.statusCode = 409;
    throw error;
  }
  userInfoResult[0].food = foodInfoResult;

  return userInfoResult;
};

const payment = async (user, point) => {
  const result = await paymentDao.checkPoint(user);

  const userPoints = result[0].points;
  if (userPoints > point) return await paymentDao.payment(user, point);
  const error = new Error("NOT_ENOUGH_POINT");
  error.statusCode = 409;
  throw error;
};

module.exports = {
  getUserCartInfo,
  payment,
};
