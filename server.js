import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

// CONFIGURE KEY
dotenv.config();

// REST OBJECT
const app = express();

// DATABASE CONFIG
connectDB();

// MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));

// REST API
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to e-commerce app",
  });
});

//PORT
const PORT = process.env.PORT || 8080;

// RUN LISTEN
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE}mode on port ${PORT}`.bgBlue
  );
});
