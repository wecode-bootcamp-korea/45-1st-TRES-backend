const express = require("express");

const productRouter = require("./productRouter");

const router = express.Router();

const orderRouter = require("./orderRouter");

router.use("/users", userRouter.router);
router.use("/order", orderRouter.router);

module.exports = router;
