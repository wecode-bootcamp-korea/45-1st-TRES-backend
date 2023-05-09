const express = require("express");

const productRouter = require("./productRouter");
const userRouter = require("./userRouter");
const likesRouter = require("./likesRouter");

const router = express.Router();

const orderRouter = require("./orderRouter");

router.use("/users", userRouter.router);
router.use("/orders", orderRouter.router);
router.use("/products", productRouter.router);
router.use("/likes", likesRouter.router);

module.exports = router;
