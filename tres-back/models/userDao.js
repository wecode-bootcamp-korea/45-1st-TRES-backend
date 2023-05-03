const dataSoure = require('./dataSource');

const signUp = async (
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
) => {
  console.log(
    `33333333`,
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
  try {
    const userResult = await dataSoure.query(
      `
        INSERT INTO users (
            email,
            first_name,
            last_name,
            password,
            phone_number,
            gender,
            birth_date
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
      [email, firstName, lastName, password, pNumber, gender, birth]
    );
    const addressResult = await dataSoure.query(
      `
        INSERT INTO addresses (
            address
        ) VALUES (?)
    `,
      [address]
    );

    await dataSoure.query(`
        INSERT INTO user_addresses (
            user_id, address_id
        ) VALUES (?, ?);
    `),
      [userResult.insertedId, addressResult.insertedId];
    await dataSoure.query;
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
