const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const mongojs = require("mongojs");
const apiRouter = require("./routes/api-routes")
const htmlRouter = require("./routes/html-routes")
const PORT = process.env.PORT || 3000;

// const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(apiRouter);
app.use(htmlRouter);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  