const dataSource = require('./dataSource');

const getUserByEmail = async (email) => {
  try {
    return await dataSource.query(
      `
      SELECT
      id,
      email,
      password
      FROM users
      WHERE email = ?;
    `,
      [email]
    );
  } catch (err) {
    console.log(err);
    err = new Error('DATA_NOT_FOUND');
    err.statusCode = 500;
    throw err;
  }
};
const getCountriesList = async (req, res) => {
  try {
    return await dataSource.query(`
    SELECT 
    id,
    country
    FROM
    countries
    ORDER BY country;
  `);
  } catch (err) {
    console.log(err);
    err = new Error('DATA_NOT_FOUND');
    err.statusCode = 500;
    throw err;
  }
};

const signUp = async (email, firstName, lastName, password, countries, phoneNumber, gender, birth, address) => {
  try {
    const addressResult = await dataSource.query(
      `
        INSERT INTO addresses (
            address
        ) VALUES (?);
    `,
      [address]
    );
    const userResult = await dataSource.query(
      `
        INSERT INTO users (
            email,
            first_name,
            last_name,
            password,
            address_id,
            phone_number,
            gender,
            birth_date
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `,
      [email, firstName, lastName, password, addressResult.insertId, phoneNumber, gender, birth]
    );

    let countryResult = [];
    for (let i = 0; i < countries.length; i++) {
      let countryId = await dataSource.query(
        `
        SELECT id
        FROM countries
        WHERE country = ?;
        `,
        [countries[i]]
      );
      countryResult.push(countryId[0]['id']);
    }

    for (let i = 0; i < countries.length; i++) {
      await dataSource.query(
        `
        INSERT INTO country_user(
          country_id,
          user_id
        ) VALUES (?, ?);
      `,
        [countryResult[i], userResult.insertId]
      );
    }
  } catch (err) {
    console.log(err);
    err = new Error('INVALID_DATA_INPUT');
    err.statusCode = 500;
  }
};
const getUserById = async (userId) => {
  try {
    return await dataSource.query(
      `
      SELECT
      id,
      email,
      first_name,
      last_name,
      address_id,
      phone_number,
      points
      FROM users
      WHERE id = ?;
    `,
      [userId]
    );
  } catch (err) {
    console.log(err);
    err = new Error('USER_NOT_FOUND');
    err.statusCode = 500;
  }
};

module.exports = {
  getCountriesList,
  signUp,
  getUserByEmail,
  getUserById,
};
