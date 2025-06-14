const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const markObsoleteRouter = require("./routes/markObsoleteRouter");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/mark-obsolete", markObsoleteRouter);

app.listen(9000, () => {
  console.log(`App running on port ${9000}...`);
});

exports.dayForgeAPITimerTriggerProxy = app;
