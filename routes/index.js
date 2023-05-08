const express = require("express");

const productRouter = require("./productRouter");
const userRouter = require("./userRouter");
const paymentRouter = require("./paymentRouter");

const router = express.Router();

router.use("/users", userRouter.router);
router.use("/products", productRouter.router);
router.use("/payment", paymentRouter.router);

module.exports = router;
