import express from "express";
import colors from "colors";
import dotenv from "dotenv";

// CONFIGURE KEY
dotenv.config();

// REST OBJECT
const app = express();

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
