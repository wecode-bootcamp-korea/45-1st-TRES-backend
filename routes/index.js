const express = require("express");

const productRouter = require("./productRouter");
const userRouter = require("./userRouter");

const router = express.Router();

const orderRouter = require("./orderRouter");

router.use("/users", userRouter.router);
router.use("/order", orderRouter.router);
router.use("/products", productRouter.router);

module.exports = router;
