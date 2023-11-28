const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/employee-management", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);

// Models
const Employee = require("./models/EmployeeList");

app.get("/employee", async (req, res) => {
  const EmployeeList = await Employee.find();

  res.json(EmployeeList);
});

app.post("/employee/new", (req, res) => {
  const employee = new Employee({
    FirstName: req.body.FirstName,
    SecondName: req.body.SecondName,
    Email: req.body.Email,
    Phone: req.body.Phone,
  });

  employee.save();

  res.json(employee);
});

app.delete("/employee/delete/:id", async (req, res) => {
  const result = await Employee.findByIdAndDelete(req.params.id);

  res.json({ result });
});

app.get("/employee/complete/:id", async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  employee.save();
  res.json(employee);
});

app.put("/employee/update/:id", async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  employee.text = req.body.text;

  (employee.FirstName = req.body.FirstName),
    (employee.SecondName = req.body.SecondName),
    (employee.Email = req.body.Email),
    (employee.Phone = req.body.Phone),
    employee.save();

  res.json(employee);
});

app.listen(3002);
