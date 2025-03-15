require("dotenv").config();
const express = require("express");
const usersRouter = require("./Routes/usersRoutes");

const app = express();
app.use(express.json());


// Middleware-plugin
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/users", (req, res) => {
  res.send(`<h1>Welcome to users write path is {/api/users}</h1>`);
});

// Using Routes
app.use("/api/v1/users", usersRouter);

module.exports = app;
