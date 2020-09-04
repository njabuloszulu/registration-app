const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerDetailsSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  idNumber: { type: Number, required: true },
  homeAddress: { type: String, required: true },
});

module.exports = RegisterDetails = mongoose.model(
  "RegisterDetails",
  registerDetailsSchema
);
