const Joi = require("joi");
const db = require("../models");
const Student = db.student;

// Create and Save a new Student
exports.create = (req, res) => {
  // Validate request
  // if (!req.body) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }

  // Validate with npm joi
  const schem = {
    studentid: Joi.string(11).required(),
    name: Joi.string().min(4).required(),
  };

  const result = Joi.validate(req.body, schem);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  }

  // Create a Student
  const studentdata = new Student({
    studentid: req.body.studentid,
    name: req.body.name,
    gpa: req.body.gpa ? req.body.gpa : 0.0,
    alumni: req.body.alumni ? req.body.alumni : true,
  });

  // Save Student in the database
  studentdata
    .save(studentdata)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Sttudent.",
      });
    });
};

// Retrieve all Student from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  Student.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving student.",
      });
    });
};

// Find a single Student with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Student.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found student with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving student with id=" + id });
    });
};

// Update a Student by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Student.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update student with id=${id}. Maybe student was not found!`,
        });
      } else res.send({ message: "Student was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Student with id=" + id,
      });
    });
};

// Delete a Student with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Student.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Student with id=${id}. Maybe Student was not found!`,
        });
      } else {
        res.send({
          message: "Student was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Student with id=" + id,
      });
    });
};

// Delete all Student from the database.
exports.deleteAll = (req, res) => {
  Student.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Students were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Students.",
      });
    });
};

// Find all Student
exports.findAllStudent = (req, res) => {
  Student.find({ alumni: false })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving student.",
      });
    });
};
// Find all Alumni
exports.findAllAlumni = (req, res) => {
  Student.find({ alumni: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving student.",
      });
    });
};
