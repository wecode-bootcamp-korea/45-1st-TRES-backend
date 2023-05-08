const paymentDao = require("../models/paymentDao");

const getUserCartInfo = async (user) => {
  return await paymentDao.getUserCartInfo(user);
};

const updateOrderStatusOrderNumberPoints = async (user) => {
  return await paymentDao.updateOrderStatusOrderNumberPoints(user);
};

module.exports = {
  getUserCartInfo,
  updateOrderStatusOrderNumberPoints,
};
