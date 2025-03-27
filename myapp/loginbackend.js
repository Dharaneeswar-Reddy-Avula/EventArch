
const express = require("express");
const cors = require("cors"); // Allow frontend requests
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes"); // Import the routes
const mongoose = require("mongoose");

dotenv.config();
const app = express();

app.use(express.json()); 
app.use(cors()); 

app.use("/", authRoutes); 

mongoose.connect("mongodb://localhost:27017/login"||process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
