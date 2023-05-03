const dataSoure = require('./dataSource');

const joinOk = async (
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
    // const addressResult = await dataSoure.query(
    //   `
    //     INSERT INTO addresses (
    //         address
    //     ) VALUES (?)
    // `,
    //   [address]
    // );

    // await dataSoure.query(`
    //     INSERT INTO user_addresses (
    //         user_id, address_id
    //     ) VALUES (?, ?);
    // `),
    //   [userResult.insertedId, addressResult.insertedId];
    // const countries = await dataSoure.query(
    //   `
    //       SELECT coutries.id
    //       FROM countries
    //       WHERE (?, ?, ?)
    // `,
    //   [country1, country2, country3]
    // );

    // await dataSoure.query(
    //   `
    //   INSERT INTO users(
    //     country_preference_id
    //     user_id
    //   ) VALUES (?)
    // `,
    //   [countries.insertedId]
    // );
    const coutryResult = await dataSoure.query(`
        INSERT INTO countries(
          country
        )
    `);

    return res.status(201).console.log('joinOk success!');
  } catch (err) {
    console.log(err);
    const error = new Error('INVALID_DATA_INPUT');
    throw error;
  }
};

module.exports = {
  joinOk,
};
