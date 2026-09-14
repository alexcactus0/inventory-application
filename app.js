require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("node:path");

// browserSync for html updates
const browserSync = require("browser-sync").create();

const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.APP_PORT;

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", userRoutes);

// template Engine EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// implementing assets (css)
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// activating browserSync
browserSync.init({
  proxy: "http://localhost:3000",
  files: ["views/**/*.ejs", "public/**/*.*"],
  port: 3001,
});
