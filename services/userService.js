// sercixes/userService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { passwordValidationCheck } = require('../utils/validationCheck');

const userDao = require('../models/userDao');

const getCountriesList = async (req, res) => {
  try {
    // console.log(`2222통과!`);
    return await userDao.getCountriesList();
  } catch (err) {
    err = new Error('Service_Error');
    throw err;
  }
};

const joinOk = async (email, firstName, lastName, password, cointries, pNumber, gender, birth, address) => {
  console.log(`22222222222`, email, firstName, lastName, cointries, umber, gender, birth, address);

  await passwordValidationCheck(password);

  const joinOk = await userDao.joinOk(
    email,
    firstName,
    lastName,
    password,
    cointries,

    pNumber,
    gender,
    birth,
    address
  );

  return joinOk;
};

module.exports = {
  getCountriesList,
  joinOk,
};
