const dataSource = require("./dataSource");

const viewCountries = async (countryId) => {
  try {
    console.log(countryId);
    return dataSource.query(
      `SELECT
            f.food,
            f.price,
            fi.image_url
          FROM foods f
          JOIN countries c ON c.id = f.country_id
          JOIN food_images fi ON fi.id = f.food_image_id
        WHERE f.country_id = ?
      `,
      [countryId]
    );
  } catch (err) {
    console.log(countryId);
    const error = new Error("errrrrror");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  viewCountries,
};
