const likesDao = require("../models/likesDao");

const CreateOrDeleteLike = async (userId, foodId) => {
  const likeExists = await likesDao.likeExists(userId, foodId);

  if (likeExists == 1) return await likesDao.deleteLike(userId, foodId);

  return await likesDao.createLike(userId, foodId);
};

module.exports = {
  CreateOrDeleteLike,
};
