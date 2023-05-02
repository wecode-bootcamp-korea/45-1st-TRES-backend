const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const authhorization = async (req, res, next) => {
  try {
    const token = req.headers.authhorization;

    if (!token) return res.status(400);

    // const decoded = jwt.verify(token, process.env.SECRETKEY);
    // const user = await userService.getUserById(decoded.userId);

    next();
  } catch (err) {
    return res.status(401);
  }
};

module.exports = { authhorization };
