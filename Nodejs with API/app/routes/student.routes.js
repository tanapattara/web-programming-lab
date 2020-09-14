module.exports = (app) => {
  const student = require("../controller/student.controller.js");

  var router = require("express").Router();

  // Create a new Student
  router.post("/", student.create);

  // Retrieve all Student
  router.get("/", student.findAll);

  // Retrieve all published Student
  router.get("/student", student.findAllStudent);
  router.get("/alumni", student.findAllAlumni);

  // Retrieve a single Student with id
  router.get("/:id", student.findOne);

  // Update a Student with id
  router.put("/:id", student.update);

  // Delete a Student with id
  router.delete("/:id", student.delete);

  // Create a new Student
  router.delete("/", student.deleteAll);

  app.use("/api/students", router);
};
