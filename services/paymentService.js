const paymentDao = require("../models/paymentDao");

const getUserCartInfo = async (user) => {
  return await paymentDao.getUserCartInfo(user);
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
