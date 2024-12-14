const express = require("express");
const colors = require('colors')
// REST OBJECT
const app = express();

// REST API
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to e-commerce app",
  });
});


//PORT 
const PORT = 8080;

// RUN LISTEN
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgBlue);
})