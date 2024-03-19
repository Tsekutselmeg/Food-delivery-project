import { connectDB } from "./db";
import express from "express";
import cors from "cors";
import userRouter from "./router/User";
import { FoodRouter } from "./router";

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use(userRouter);
app.use(FoodRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
