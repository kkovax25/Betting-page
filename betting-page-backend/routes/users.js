const express = require('express');
const router = express.Router();
require("dotenv").config();
const secret = process.env.JWT_SECRET
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../modals/User');

// @route   POST api/users
// @desc    Register a user
// @acces   Public
router.post('/', [
  check('name', 'Please fill the name').not().isEmpty(),
  check('email', 'Please include a valid emal').isEmail(),
  check('password', 'Please enter a password with min 6 characters').isLength({
    min: 6
  })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  const { name, email, password } = req.body

  try {
    let user = await User.findOne({ email });

    if (user) {
      res.status(400).json({ msg: 'User already exists' })
    }

    user = new User({ name, email, password })

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      }
    }
    jwt.sign(payload, secret, {
      expiresIn: 360000
    }, (err, token) => {
      if (err) throw err;
      res.json({ token })
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server error')
  }
});

module.exports = router