// sercixes/userService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { passwordValidationCheck } = require('../utils/validationCheck');

const userDao = require('../models/userDao');

const signUp = async (
  email,
  firstName,
  lastName,
  password,
  country1,
  country2,
  country3,
  pNumber,
  gender,
  birth,
  address
) => {
  console.log(`22222222222`, email, firstName, lastName, country1, country2, country3, pNumber, gender, birth, address);

  await passwordValidationCheck(password);
  const hashedPassword = await bcrypt.hash(password, 12);

  const signUp = await userDao.signUp(
    email,
    firstName,
    lastName,
    password,
    country1,
    country2,
    country3,
    pNumber,
    gender,
    birth,
    address
  );

  return signUp;
};

const logIn = async (email, password) => {
  const [user] = await userDao.getUserByEmail(email);

  if (!user || !bcrypt.compare(password, user.password)) {
    return new Error('Invalid emial or Password');
  }
  return jwt.sign({ userName: user.lastName }, process.env.SECRETKEY);
  return user;
};

module.exports = {
  signUp,
  logIn,
};
