const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true, // You can also set this to false if it's optional
  },
  image: {
    type: String,
    required: true,
  },
  resourceLink: {
    type: String, // Optional additional link for course material
    required: false,
  },
});

module.exports = mongoose.model("Course", CourseSchema);
