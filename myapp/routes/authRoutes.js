
require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User");
const router = express.Router();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post("/signup", async (req, res) => {
    console.log("📩 Signup request received:", req.body);

    try {
        const { id, name, email, password, branch, year, number, address } = req.body;

        if (!id || !name || !email || !password || !branch || !year || !number || !address) {
            return res.status(400).json({ success: false, error: "All fields are required" });
        }

        if (!/^n\d{6}@rguktn\.ac\.in$/.test(email)) {
            return res.status(400).json({ success: false, error: "Invalid RGUKTN email format." });
        }

        const existingUser = await User.findOne({ id });
        if (existingUser) {
            return res.status(409).json({ success: false, error: "User with this ID already exists" });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(409).json({ success: false, error: "User with this email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            id,
            name,
            email,
            password: hashedPassword,  // Store the hashed password
            branch,
            year,
            number,
            address
        });

        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        console.log("User registered successfully!");
        res.status(201).json({ success: true, token });

    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ success: false, error: "Server error" });
    }
});


router.post("/login", async (req, res) => {
    console.log("🔐 Login request received:", req.body);

    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, error: "Invalid password" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        console.log("Login Successful");
        return res.json({ success: true, token });

    } catch (err) {
        console.error("Login Error:", err.message);
        return res.status(500).json({ success: false, error: "Server error. Check logs for details." });
    }
});


// Google Login Route
router.post("/google-login", async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { email, name } = ticket.getPayload();

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ name, email, password: "" });
      await user.save();
    }

    const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ success: true, token: jwtToken });
  } catch (err) {
    res.status(401).json({ success: false, errors: "Invalid Google token." });
  }
});

module.exports = router;
