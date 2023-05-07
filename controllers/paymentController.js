const paymentService = require("../services/paymentService");

const getUserCartInfo = async (req, res) => {
  try {
    const user = req.user;
    const result = await paymentService.getUserCartInfo(user);
    return res.status(200).json(result);
  } catch (error) {
    error = new Error("CONTROLLER!!");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  getUserCartInfo,
};
