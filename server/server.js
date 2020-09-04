const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { registerApi } = require("./routes/api");
require("dotenv/config");

const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

registerApi(app);
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});
