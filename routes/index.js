// routes/index.js

const express = require("express");
const router = express.Router();

const productRouter = require("./productRouter");

const userRouter = require("./userRouter");
const paymentRouter = require("./paymentRouter");

router.use("/users", userRouter.router);
router.use("/payment", paymentRouter.router);

module.exports = router;
