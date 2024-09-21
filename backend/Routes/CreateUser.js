const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "mynameisshaileshandiamunemplyed$12"
// Create new user
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

// Login user
router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Find user by email
      let userData = await User.findOne({ email: req.body.email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Invalid credentials, please try again" });
      }

      // Compare passwords
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        userData.password
      );



      if (!passwordMatch) {
        return res
          .status(400)
          .json({ errors: "Invalid credentials, please try again" });
      }

      const data={
        user:{
            id:userData.id
        }
      }
      const authToken =jwt.sign(data,jwtSecret)
      // Successful login
      res.json({ success: true,authToken:authToken });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

module.exports = router;
