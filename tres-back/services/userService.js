// sercixes/userService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { passwordValidationCheck } = require('../utils/validationCheck');

const userDao = require('../models/userDao');

const signUp = async (email, firstName, lastName, password, countryPre, pNumber, gender, birth, adress) => {
  console.log(`22222222222`, email, firstName, lastName, countryPre, pNumber, gender, birth, adress);

  await passwordValidationCheck(password);
  const hashedPassword = await bcrypt.hash(password, 12);

  const signUp = await userDao.signUp(email, firstName, lastName, password, countryPre, pNumber, gender, birth, adress);

  return signUp;
};

const logIn = async (email, password) => {
  const [user] = await userDao.getUserByEmail(email);

  if (!user || !bcrypt.compare(password, user.password)) {
    return new Error('Invalid emial or Password');
  }
  // return jwt.sign({ userName: user.lastName }, process.env.SECRETKEY);
  return user;
};

module.exports = {
  signUp,
  logIn,
};
