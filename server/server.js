import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/UserRoute.js";
import cors from "cors";

const uri =
  "mongodb+srv://Jimmy:neutron@pigpals.8xnlnkd.mongodb.net/PigPals?retryWrites=true&w=majority&appName=PigPals";
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});

app.use("/users", userRoute);

mongoose
  .connect(uri)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
