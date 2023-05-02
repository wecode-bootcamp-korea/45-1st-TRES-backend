const userService = require('../service/userService');

const signUp = async (req, res) => {
  try {
    const { email, firstName, lastName, password, countryPre, pNumber, gender, birth } = req.body;
    if (!email || !firstName || !lastName || !password || !countryPre || !pNumber || !gender || !birth) {
      return res.status(400);
    }
    await userService.signUp(email, firstName, lastName, password, countryPre, pNumber, gender, birth);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500);
  }
};

module.exports = {
  signUp,
};
