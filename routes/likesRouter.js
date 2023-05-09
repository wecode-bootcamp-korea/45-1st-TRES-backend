const express = require("express");
const likesController = require("../controllers/likesController");

const router = express.Router();

router.post("", likesController.CreateOrDeleteLike);

module.exports = {
  router,
};
