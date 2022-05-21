const express = require("express");
const connectDB = require("./configs/db");
const cors = require("cors");
const dbSetup = require("./custom_modules/dbSetup");
const memberController = require("./controllers/memberController");
const movieController = require("./controllers/movieController");
const subscriptionController = require("./controllers/subscriptionController");

const app = express();
const port = 8001;
const host = "0.0.0.0";

connectDB();

// Init database
// dbSetup.initData();
// dbSetup.loadMembers();
// dbSetup.loadMovies();

app.use(cors());

app.use(express.json());

app.use("/members", memberController);
app.use("/movies", movieController);
app.use("/subscriptions", subscriptionController);

app.listen(process.env.PORT || port, host, () =>
  console.log("Heroku server is on")
);
