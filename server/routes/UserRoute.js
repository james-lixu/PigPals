// routes/userRoutes.js
import express from "express";
import Users from "../models/Users.js";

const UserRoute = express.Router();
UserRoute.post("/", async (req, res) => {
  try {
    const user = new Users(req.body);
    const savedUser = await user.save();
    res.status(201).send({ user: savedUser });
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

UserRoute.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default UserRoute;
