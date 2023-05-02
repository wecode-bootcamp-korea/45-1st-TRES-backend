const dataSoure = require('./dataSource');

const signUp = async (email, firstName, lastName, password, countryPre, pNumber, gender, birth, adress) => {
  console.log(`33333333`, email, firstName, lastName, password, countryPre, pNumber, gender, birth, adress);
  try {
    return await dataSource.query(
      `
        INSERT INTO users (
            email,
            first_name,
            last_name,
            password,
            country_preference,
            phone_number,
            gender,
            birth_date
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
    `,
      [email, firstName, lastName, password, countryPre, pNumber, gender, birth]
    );
  } catch (err) {
    console.log(err);
    const error = new Error('INVALID_DATA_INPUT');
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    return await dataSoure.query(
      `
            SELECT
            password
            FROM users
            WHERE email = ?;
        `[email]
    );
  } catch (err) {
    const error = new Error('DATA_NOT_FOYND');
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  signUp,
  getUserByEmail,
};
