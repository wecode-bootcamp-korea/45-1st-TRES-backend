const userService = require('../services/userService');

const signUp = async (req, res) => {
  try {
    const { email, firstName, lastName, password, countryPre, pNumber, gender, birth, adress } = req.body;
    console.log(`111111111111111`, email, firstName, lastName, countryPre, pNumber, gender, birth, adress);

    if (!email || !firstName || !lastName || !password || !countryPre || !pNumber || !gender || !birth || adress) {
      return res.status(400);
    }
    await userService.signUp(email, firstName, lastName, password, countryPre, pNumber, gender, birth, adress);
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
