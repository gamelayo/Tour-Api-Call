const path = require("path");
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleWare/errorMiddleWare");
const PORT = process.env.PORT || 5000;
const app = express();
const connectDB = require("./config/db");
// Home page
app.get("/", (_, res) => {
  res.status(200).json({ message: "welcome to the Tour App API" });
});
// connect to database
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`server stated on port ${PORT}`));
