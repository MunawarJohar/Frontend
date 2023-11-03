const express = require("express");
const fetchUser = require("../middleware/fetchUser");
const UserTradingInfo = require("../ models/UserTradingInfo");

const router = express.Router();

router.get("/profit-loss-overview", fetchUser, async (req, res) => {
  const userid = req.user.id;

  try {
    const foundUser = await UserTradingInfo.findById(userid).exec();

    if (!foundUser)
      return res.status(400).json({ message: "User id not found" });

    return res.status(200).json({ profitLossOverview: foundUser.profitLoss });
  } catch (error) {
    console.log(error);
  }
});

router.get("/drawdown-overview", fetchUser, async (req, res) => {
  const userid = req.user.id;

  try {
    const foundUser = await UserTradingInfo.findById(userid).exec();

    if (!foundUser)
      return res.status(400).json({ message: "User id not found" });

    return res.status(200).json({ drawdownOverview: foundUser.drawdown });
  } catch (error) {
    console.log(error);
  }
});

router.get("/trading-days-overview", fetchUser, async (req, res) => {
  const userid = req.user.id;

  try {
    const foundUser = await UserTradingInfo.findById(userid).exec();

    if (!foundUser)
      return res.status(400).json({ message: "User id not found" });

    return res.status(200).json({ tradingDaysOverview: foundUser.tradingDays });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
