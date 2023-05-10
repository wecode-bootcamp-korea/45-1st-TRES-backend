const express = require("express");

const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const orderRouter = require("./orderRouter");
const likeRouter = require("./likesRouter");

const router = express.Router();

router.use("/users", userRouter.router);
router.use("/products", productRouter.router);
router.use("/orders", orderRouter.router);
router.use("/likes", likeRouter.router);

module.exports = router;
