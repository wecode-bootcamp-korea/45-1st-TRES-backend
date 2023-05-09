const dataSource = require("./dataSource");

const likes = async (userId, foodId) => {
  try {
    const [isExists] = await dataSource.query(
      `
                SELECT EXISTS (
                    SELECT * FROM likes 
                    WHERE (
                      user_id = ? AND food_id = ?
                    )
                )
        `,
      [userId, foodId]
    );

    console.log(isExists);

    if (Object.values(isExists[0]) == 1) {
      await dataSource.query(
        `
                DELETE FROM likes
                WHERE user_id = ? AND food_id = ?
          `,
        [userId, foodId]
      );
      return false;
    }

    await dataSource.query(
      `
                INSERT INTO likes (
                    user_id,
                    food_id
                ) VALUES (
                    ?,
                    ?
                )
          `,
      [userId, foodId]
    );
    return true;
  } catch (error) {
    error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  likes,
};
