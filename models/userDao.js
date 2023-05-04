const dataSource = require('./dataSource');

const getUserByEmail = async (email) => {
  try {
    return await dataSource.query(
      `
      SELECT
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
    SELECT id, country
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

const joinOk = async (email, firstName, lastName, password, countries, pNumber, gender, birth, address) => {
  try {
    const addressResult = await dataSource.query(
      `
        INSERT INTO addresses (
            address
        ) VALUES (?);
    `,
      [address]
    );
    console.log(`4444444`, addressResult.insertId);
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
      [email, firstName, lastName, password, addressResult.insertId, pNumber, gender, birth]
    );
    console.log(`5555`, userResult);

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
      console.log(countryId[0]['id']);
      countryResult.push(countryId[0]['id']);
    }

    console.log(`77777777777`, countryResult);

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

module.exports = {
  getCountriesList,
  joinOk,
  getUserByEmail,
};
