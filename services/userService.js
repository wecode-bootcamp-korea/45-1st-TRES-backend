// sercixes/userService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const { passwordValidationCheck } = require('../utils/validationCheck');

const userDao = require('../models/userDao');

const getCountriesList = async (req, res) => {
  try {
    return await userDao.getCountriesList();
  } catch (err) {
    console.log(err);
    err = new Error('Service_Error');
    throw err;
  }
};

const joinOk = async (email, firstName, lastName, password, cointries, pNumber, gender, birth, address) => {
  console.log(`22222222222`, email, firstName, lastName, cointries, pNumber, gender, birth, address);

  // await passwordValidationCheck(password);

  const joinOk = await userDao.joinOk(email, firstName, lastName, password, cointries, pNumber, gender, birth, address);

  return joinOk;
};

const login = async (email, password) => {
  try {
    const [user] = await userDao.getUserByEmail(email);

    if (!user || !password) {
      throw err;
    }
    return jwt.sign({ id: user.id, email: user.email }, process.env.SECRETKEY, {
      expiresIn: '10h',
      issuer: 'inni',
    });
  } catch (err) {
    console.log(err);
    err = new Error('INVALID_USER');
    throw err;
  }
};

module.exports = {
  getCountriesList,
  joinOk,
  login,
};
