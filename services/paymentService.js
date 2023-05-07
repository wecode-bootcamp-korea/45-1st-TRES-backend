const paymentDao = require("../models/paymentDao");

const getUserCartInfo = async (user) => {
  console.log(`service`, user.id);
  return await paymentDao.getUserCartInfo(user);
};

module.exports = {
  getUserCartInfo,
};
