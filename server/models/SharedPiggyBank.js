const mongoose = require("mongoose");

const sharedPiggyBankSchema = new mongoose.Schema({
  name: { type: String, required: true },
  goalAmount: Number,
  currentBalance: { type: Number, default: 0 },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  participants: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      canContribute: { type: Boolean, default: false },
      status: {
        type: String,
        enum: ["pending", "accepted", "denied"],
        default: "pending",
      },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const SharedPiggyBank = mongoose.model(
  "SharedPiggyBank",
  sharedPiggyBankSchema
);

export default SharedPiggyBank;
