const likesService = require("../services/likesService");
const { catchAsync } = require("../utils/error");

const CreateOrDeleteLike = catchAsync(async (req, res) => {
  const { userId, foodId } = req.body;

  if (!userId || !foodId) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;
    throw error;
  }

  const userLikes = await likesService.CreateOrDeleteLike(userId, foodId);

  if (userLikes.insertId == 0)
    return res.status(200).json({ message: "likeCanceled" });

  return res.status(201).json({ message: "likeCreated" });
});

module.exports = {
  CreateOrDeleteLike,
};
