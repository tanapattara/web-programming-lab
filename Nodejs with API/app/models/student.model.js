module.exports = (mongoose) => {
  // a simple scchem
  const studentschema = mongoose.Schema(
    {
      studentid: String,
      name: String,
      gpa: Number,
      alunni: Boolean,
    },
    { timestamps: true }
  );

  const Student = mongoose.model("student", studentschema);

  return Student;
};
