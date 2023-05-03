const userService = require('../services/userService');

const getCountriesList = async (req, res) => {
  try {
    const result = await userService.getCountriesList();
    return res.status(200).json({ result });
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
      return res.status(400).json({ message: `1111Error` });
    }
    await userService.joinOk(email, firstName, lastName, password, countries, pNumber, gender, birth, address);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500);
  }
};

module.exports = {
  joinOk,
  getCountriesList,
};
