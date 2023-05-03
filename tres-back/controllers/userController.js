const userService = require('../services/userService');

const signUp = async (req, res) => {
  try {
    const { email, firstName, lastName, password, country1, country2, country3, pNumber, gender, birth, address } =
      req.body;
    console.log(
      `111111111111111`,
      email,
      firstName,
      lastName,
      country1,
      country2,
      country3,
      pNumber,
      gender,
      birth,
      address
    );

    if (!email || !firstName || !lastName || !password || !pNumber || !gender || !birth || !address) {
      return res.status(400).json({ message: `1111Error` });
    }
    await userService.signUp(
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
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500);
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userService.logIn(email, password);
    return res.status(200);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 400);
  }
};

module.exports = {
  signUp,
  logIn,
};
