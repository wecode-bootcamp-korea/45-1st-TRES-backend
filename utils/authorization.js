const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const authorization = async (req, res, next) => {
  const token = req.heaers.authorization;
  if (!token) return res.status(400).json({ message: 'TOKEN_EMPTY' });

  const decoded = jwt.verify(token, process.env.SECRETKEY);
  console.log(decoded);
  const user = await userService.userEmailCheck(decoded.email);
};
