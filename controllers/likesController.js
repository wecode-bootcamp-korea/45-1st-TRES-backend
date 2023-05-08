const likesService = require("../services/likesService");
const { catchAsync } = require("../utils/error");

const likes = catchAsync(async (req, res) => {
  const { userId, foodId } = req.body;

  if (!userId || !foodId) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }

  const userLikes = await likesService.likes(userId, foodId);

  if (userLikes == true)
    return res.status(201).json({ message: "likeCreated" });

  return res.status(201).json({ message: "likeCanceled" });
});

module.exports = {
  likes,
};
