const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeListSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  SecondName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    default: Date.now(),
  },
});

const Employee = mongoose.model("Employee", EmployeeListSchema);

module.exports = Employee;
