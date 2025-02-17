const express = require("express");
const Course = require("../modals/Course");

const router = express.Router();

// Fetch all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Add a new course
router.post("/", async (req, res) => {
  const { title, description, videoUrl, image } = req.body;
  try {
    const newCourse = new Course({ title, description, videoUrl, image });
    await newCourse.save();
    res.status(201).json({ success: true, message: "Course added successfully", course: newCourse });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Add predefined course (for testing or seeding the database)
router.post("/add-predefined-course", async (req, res) => {
  try {
    const predefinedCourse = {
      title: "Introduction to React",
      description: "Learn React basics with this introductory video.",
      videoUrl: "https://www.youtube.com/embed/2sVeyo2tYbE?si=Hsg4993bosisRvki",
      image: "https://th.bing.com/th/id/OIP.HEQCOjH6prR2uoVCwbs__gHaEK?w=294&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    };

    const newCourse = new Course(predefinedCourse);
    await newCourse.save();
    res.status(201).json({ success: true, message: "Predefined course added successfully", course: newCourse });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
