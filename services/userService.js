// sercixes/userService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { passwordValidationCheck } = require('../utils/validationCheck');

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

  await passwordValidationCheck(password);
  const hashedPassword = await bcrypt.hash(password, 12);
  console.log(`hashed`, hashedPassword);

  const joinOk = await userDao.joinOk(
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

  return joinOk;
};

const userEmailCheck = async (email) => {
  try {
    const [user] = await userDao.getUserByEmail(email);
    return user;
  } catch (err) {
    console.log(err);
    err = new Error('INVALID_USER');
    throw err;
  }
};
const login = async (email, password) => {
  try {
    const [user] = await userDao.getUserByEmail(email);
    console.log(`2222222222`, user);

    if (!user || !password) {
      return user;
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
  userEmailCheck,
};
