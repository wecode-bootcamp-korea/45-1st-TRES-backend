// sercixes/userService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { passwordValidationCheck, emailValidationCheck } = require('../utils/validationCheck');

const userDao = require('../models/userDao');

const userEmailCheck = async (email) => {
  try {
    const [user] = await userDao.getUserByEmail(email);
    return user;
  } catch (err) {
    console.log(err);
    err = new Error('INVALID_USER');
    err.statusCode = 409;
    throw err;
  }
};
const login = async (email, password) => {
  try {
    const [user] = await userDao.getUserByEmail(email);

    const passwordResult = await bcrypt.compare(password, user.password);
    if (passwordResult == false) {
      return undefined;
    } else if (!user || !passwordResult) {
      return undefined;
    }
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        fristName: user.fristName,
        lastName: user.lastName,
        address: user.address,
      },
      process.env.SECRETKEY,
      {
        expiresIn: '10h',
        issuer: 'inni',
      }
    );
  } catch (err) {
    console.log(err);
    err = new Error('INVALID_USER');
    err.statusCode = 409;
    throw err;
  }
};
const getCountriesList = async (req, res) => {
  try {
    return await userDao.getCountriesList();
  } catch (err) {
    console.log(err);
    err = new Error('Service_Error');
    err.statusCode = 409;
    throw err;
  }
};

const signUp = async (email, firstName, lastName, password, cointries, pNumber, gender, birth, address) => {
  try {
    await emailValidationCheck(email);
    await passwordValidationCheck(password);
    const hashedPassword = await bcrypt.hash(password, 12);

    const signUp = await userDao.signUp(
      email,
      firstName,
      lastName,
      hashedPassword,
      cointries,
      pNumber,
      gender,
      birth,
      address
    );
    return signUp;
  } catch (err) {
    console.log(err);
    err = new Error('Service_Error');
    err.statusCode = 409;
    throw err;
  }
};

module.exports = {
  userEmailCheck,
  login,
  getCountriesList,
  signUp,
};
