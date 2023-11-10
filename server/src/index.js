import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipe.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect("mongodb+srv://kiran9860819025:8190Mm@recipe.6quq2i0.mongodb.net/recipe?retryWrites=true&w=majority");

app.listen(3001, () => console.log("Server Started!"));