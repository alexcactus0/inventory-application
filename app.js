require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
