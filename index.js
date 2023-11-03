require("dotenv").config();
const express = require("express");
const corsOptions = require("./config/corsOptions");
const mongoose = require("mongoose");
const connectDB = require("./db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = 8080;

const app = express();
connectDB();

//app level middlewears
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// all available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/tradingInfo"));

// once the app is connected to mongoDB start the server
mongoose.connection.once("open", () => {
  console.log("Connected to database");
  app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
  });
});
