const mongoose = require("mongoose");

const UserTrandingInfoSchema = new mongoose.Schema({
  profitLoss: {
    type: Object,
  },
  drawdown: {
    type: Object,
  },
  tradingDays: {
    type: Object,
  },
});

module.exports = mongoose.model("UserTrandingInfo", UserTrandingInfoSchema);
