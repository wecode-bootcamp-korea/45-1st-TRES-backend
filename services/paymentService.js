const paymentDao = require("../models/paymentDao");

const getUserCartInfo = async (user) => {
  return await paymentDao.getUserCartInfo(user);
};

module.exports = {
  getUserCartInfo,
};
