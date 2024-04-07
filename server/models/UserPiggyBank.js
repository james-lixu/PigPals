const mongoose = require("mongoose");

const userPiggyBankSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  goalAmount: Number,
  currentBalance: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const UserPiggyBank = mongoose.model("UserPiggyBank", userPiggyBankSchema);

export default UserPiggyBank;
