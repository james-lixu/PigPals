// routes/userRoutes.js
import express from "express";
import Users from "../models/Users.js";
import bcrypt from "bcrypt";

const UserRoute = express.Router();

UserRoute.get("/", async (req, res) => {
  try {
    const users = await Users.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

UserRoute.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new Users({
      ...req.body,
      passwordHash: hashedPassword,
    });

    const savedUser = await user.save()
    const userForResponse = { ...savedUser._doc };
    delete userForResponse.password;
    res.status(201).send({ user: userForResponse });
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

UserRoute.post("/login", async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("User not found.");
    }

    const isMatch = await bcrypt.compare(req.body.password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    res.json({ message: "Login successful." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred." });
  }
});

export default UserRoute;
