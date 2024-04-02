// routes/userRoutes.js
import express from "express";
import User from "../models/User.js";

const UserRouter = express.Router();
UserRouter.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).send({ user: savedUser });
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

UserRouter.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default UserRouter;
