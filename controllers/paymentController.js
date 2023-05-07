const paymentService = require("../services/paymentService");

const getUserCartInfo = async (req, res) => {
  const user = req.user;
  try {
    const result = await paymentService.getUserCartInfo(user);
    console.log(result);
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
