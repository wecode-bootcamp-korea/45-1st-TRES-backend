const paymentDao = require("../models/paymentDao");

const getUserCartInfo = async (user) => {
  return await paymentDao.getUserCartInfo(user);
};

const updateOrderStatusOrderNumberPoints = async (user, point) => {
  return await paymentDao.updateOrderStatusOrderNumberPoints(user, point);
};

module.exports = {
  getUserCartInfo,
  updateOrderStatusOrderNumberPoints,
};
