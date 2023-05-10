const dataSource = require("./dataSource");
const queryRunner = dataSource.createQueryRunner();

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
  } catch (error) {
    error = new Error("DATA_NOT_FOUND");
    error.statusCode = 400;
    throw error;
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
  } catch (error) {
    error = new Error("DATA_NOT_FOUND");
    error.statusCode = 400;
    throw error;
  }
};

const signUp = async (
  email,
  firstName,
  lastName,
  password,
  countries,
  phoneNumber,
  gender,
  birth,
  address
) => {
  await queryRunner.connect();
  await queryRunner.startTransaction();
  try {
    const addressResult = await queryRunner.query(
      `
        INSERT INTO addresses (
            address
        ) VALUES (?);
    `,
      [address]
    );
    const userResult = await queryRunner.query(
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
      [
        email,
        firstName,
        lastName,
        password,
        addressResult.insertId,
        phoneNumber,
        gender,
        birth,
      ]
    );

    let countryResult = [];
    for (let i = 0; i < countries.length; i++) {
      let countryId = await queryRunner.query(
        `
        SELECT id
        FROM countries
        WHERE country = ?;
        `,
        [countries[i]]
      );
      countryResult.push(countryId[0]["id"]);
    }

    for (let i = 0; i < countries.length; i++) {
      await queryRunner.query(
        `
        INSERT INTO country_user(
          country_id,
          user_id
        ) VALUES (?, ?);
      `,
        [countryResult[i], userResult.insertId]
      );
    }
    await queryRunner.commitTransaction();
    return;
  } catch (error) {
    await queryRunner.rollbackTransaction();
    console.log(error);
    error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 400;
    throw error;
  } finally {
    await queryRunner.release();
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
  } catch (error) {
    error = new Error("USER_NOT_FOUND");
    error.statusCode = 400;
    throw error;
  }
};

module.exports = {
  getCountriesList,
  signUp,
  getUserByEmail,
  getUserById,
};
