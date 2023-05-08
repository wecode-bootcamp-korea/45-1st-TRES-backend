const likesDao = require("../models/likesDao");

const likes = async (userId, foodId) => {
  const likes = await likesDao.likes(userId, foodId);
  return likes;
};

module.exports = {
  likes,
};
