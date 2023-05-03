const express = require("express");
const router = express.Router();

const userRouter = require("./users.route");
const rewardsRouter = require("./rewards.route");
const balanceRouter = require("./balances.route");
const transferRouter = require("./transfers.route");
const bountyRouter = require("./bounty.route");
const claimsRouter = require("./claims.route");

const { authenticateToken } = require("../../middleware/authorization");

router.use(authenticateToken);

// /api/
router.use("/user", userRouter);
router.use("/rewards", rewardsRouter);
router.use("/balance", balanceRouter);
router.use("/transfer", transferRouter);
router.use("/bounty", bountyRouter);
router.use("/claims", claimsRouter);

module.exports = router;
