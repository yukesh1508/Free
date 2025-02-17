const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

require("dotenv").config();
const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET;
const mongoURI = process.env.MONGO_URI;


// Database Connection
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // No need for these options in Mongoose 6+
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));
// Routes
app.use("/api/auth", authRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
