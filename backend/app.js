const dotenv = require("dotenv");
dotenv.config();

const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();
const cors = require("cors");

const connectToDB = require("./db/db");
const userRoutes = require("./routes/user.routes");

connectToDB();

app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);

module.exports = app;
