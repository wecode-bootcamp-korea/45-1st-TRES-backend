const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  passwordValidationCheck,
  emailValidationCheck,
} = require("../utils/validationCheck");

const userDao = require("../models/userDao");

const userEmailCheck = async (email) => {
  try {
    const [user] = await userDao.getUserByEmail(email);
    return user;
  } catch (err) {
    console.log(err);
    err = new Error("INVALID_USER");
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
      },
      process.env.SECRETKEY,
      {
        expiresIn: process.env.expiresIn,
        issuer: process.env.issuer,
      }
    );
  } catch (err) {
    console.log(err);
    err = new Error("INVALID_USER");
    err.statusCode = 409;
    throw err;
  }
};
const getCountriesList = async (req, res) => {
  try {
    return await userDao.getCountriesList();
  } catch (err) {
    console.log(err);
    err = new Error("Service_Error");
    err.statusCode = 409;
    throw err;
  }
};

const signUp = async (
  email,
  firstName,
  lastName,
  password,
  cointries,
  phoneNumber,
  gender,
  birth,
  address
) => {
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
      phoneNumber,
      gender,
      birth,
      address
    );
    return signUp;
  } catch (err) {
    console.log(err);
    err = new Error("Service_Error");
    err.statusCode = 409;
    throw err;
  }
};

const getUserById = async (userId) => {
  try {
    const user = await userDao.getUserById(userId);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("INVALID_USER");
  }
};

module.exports = {
  userEmailCheck,
  login,
  getCountriesList,
  signUp,
  getUserById,
};
