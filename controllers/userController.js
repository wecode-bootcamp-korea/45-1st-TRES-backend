const userService = require("../services/userService");
const {
  emailValidationCheck,
  passwordValidationCheck,
} = require("../utils/validationCheck");

const userEmailCheck = async (req, res) => {
  try {
    const { email } = req.body;
    await emailValidationCheck(email);
    if (!email) return res.status(400).send("EMAIL_EMPTY!");

    const result = await userService.userEmailCheck(email);
    if (!result) return res.status(400).json({ isEmailExist: false });

    return res.status(200).json({ isEmailExist: true });
  } catch (err) {
    err = new Error("EMAIL_NOT_VALID");
    err.statusCode = 400;
    throw err;
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: Key_Error });
    }
    const result = await userService.login(email, password);
    if (!result)
      return res.status(400).json({ passwordError: "CHECK_PASSWORD" });
    return res.status(200).send({ accessToken: result });
  } catch (err) {
    err = new Error("INVALID_USER_INPUT");
    err.statusCode = 400;
    throw err;
  }
};

const getCountriesList = async (req, res) => {
  try {
    const result = await userService.getCountriesList();
    return res.status(200).json(result);
  } catch (err) {
    err = new Error("CONTROLLER_ERROR");
    err.statusCode = 400;
    throw err;
  }
};

const signUp = async (req, res) => {
  try {
    const {
      email,
      firstName,
      lastName,
      password,
      countries,
      phoneNumber,
      gender,
      birth,
      address,
    } = req.body;
    await passwordValidationCheck(password);

    if (
      !email ||
      !firstName ||
      !lastName ||
      !password ||
      !phoneNumber ||
      !gender ||
      !birth ||
      !address
    ) {
      return res.status(400).json({ message: `VALUE_MUST_NOT_EMPTY` });
    }
    await userService.signUp(
      email,
      firstName,
      lastName,
      password,
      countries,
      phoneNumber,
      gender,
      birth,
      address
    );
    return res.status(200).json({ message: "SIGN_UP_SUCCESS" });
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
