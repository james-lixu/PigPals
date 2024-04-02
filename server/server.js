import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import UserRouter from "../server/routes/UserRouter.js";

const uri =
  "mongodb+srv://Jimmy:neutron@pigpals.8xnlnkd.mongodb.net/?retryWrites=true&w=majority&appName=PigPals";

mongoose.connect(uri).then(() => console.log("MongoDB connection established"));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/users", UserRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
