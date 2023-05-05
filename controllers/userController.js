const userService = require('../services/userService');

const userEmailCheck = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).send('EMAIL_EMPTY!');

    const result = await userService.userEmailCheck(email);
    if (!result) return res.status(400).json({ isEmailExist: false });

    return res.status(200).json({ isEmailExist: true });
  } catch (err) {
    console.log(err);
    err = new Error('CONTROLLER_ERROR');
    err.statusCode = 400;
    throw err;
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send(false);
    }
    const result = await userService.login(email, password);
    if (!result) return res.status(400).json({ passwordError: 'CHECK_PASSWORD' });
    return res.status(200).send({ accessToken: result });
  } catch (err) {
    console.log(err);
    err = new Error('CONTROLLER_ERROR');
    err.statusCode = 400;
    throw err;
  }
};

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

const signUp = async (req, res) => {
  try {
    const { email, firstName, lastName, password, countries, pNumber, gender, birth, address } = req.body;

    if (!email || !firstName || !lastName || !password || !pNumber || !gender || !birth || !address) {
      return res.status(400).json({ message: `VALUE_MUST_NOT_EMPTY` });
    }
    await userService.signUp(email, firstName, lastName, password, countries, pNumber, gender, birth, address);
    return res.status(200).json({ message: '회원가입 성공!' });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500);
  }
};

module.exports = {
  userEmailCheck,
  login,
  getCountriesList,
  signUp,
};
