const userService = require('../services/userService');

const getCountriesList = async (req, res) => {
  try {
    const result = await userService.getCountriesList();
    return res.status(200).json(result);
  } catch (err) {
    err = new Error('CONTROLLER_ERROR');
    err.statusCode = 400;
    throw err;
  }
};

const joinOk = async (req, res) => {
  try {
    const { email, firstName, lastName, password, countries, pNumber, gender, birth, address } = req.body;
    console.log(`111111111111111`, email, firstName, lastName, countries, pNumber, gender, birth, address);

    if (!email || !firstName || !lastName || !password || !pNumber || !gender || !birth || !address) {
      return res.status(400).json({ message: `VALUE_MUST_NOT_EMPTY` });
    }
    await userService.joinOk(email, firstName, lastName, password, countries, pNumber, gender, birth, address);
    return res.status(200).send('JOIN_SUCCESS!');
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500);
  }
};

const userEmailCheck = async (res, req) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).send(false);
    }
  } catch (err) {
    console.log(err);
    err = new Error('KEY_ERROR');
    err.statusCode = 400;
    throw err;
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`1111111`, req.body);
    // console.log(email, password);
    if (!email || !password) {
      return res.status(400).send(false);
    }
    const result = await userService.login(email, password);
    console.log(`result`, result);
    if (!!result == false) {
      console.log('EMAIL_OR_PASSWORD_NOT_FOUND');
      return res.status(400).json('USER_NOT_FOUND');
    }
    return res.status(200).send({ accessToken: result });
  } catch (err) {
    console.log(err);
    err = new Error('KEY_ERROR');
    err.statusCode = 400;
    throw err;
  }
};

module.exports = {
  getCountriesList,
  joinOk,
  login,
};
