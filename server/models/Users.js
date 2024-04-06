import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  mainPiggyBank: { type: mongoose.Schema.Types.ObjectId, ref: "PiggyBank" },
  sharedPiggyBanks: [
    { type: mongoose.Schema.Types.ObjectId, ref: "PiggyBank" },
  ],
});

const Users = mongoose.model("Users", userSchema);

export default Users;
