const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../modals/User');
const FavouriteTeam = require('../modals/FavouriteTeams');

// @route   GET api/profile
// @desc    Get all users favourite teams
// @acces   Private
router.get('/', auth, async (req, res) => {
  try {
    const favouriteTeams = await FavouriteTeam.find({ user: req.user.id }).sort({ date: -1 })
    res.json(favouriteTeams)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

// @route   POST api/profile
// @desc    Add new team to favourites
// @acces   Private
router.post('/', [auth, [
  check('teamName', 'Name is required').not().isEmpty(),
  check('teamNumber', 'Id is required').not().isEmpty()
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  const { teamName, teamNumber } = req.body;
  try {

    const newFavTeam = new FavouriteTeam({
      teamName,
      teamNumber,
      user: req.user.id
    });

    const favTeam = await newFavTeam.save();
    res.json(favTeam);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }
});

// @route   PUT api/profile
// @desc    Update user profile
// @acces   Private
router.put('/', auth, async (req, res) => {
  const test = await User.findByIdAndUpdate(req.user.id, { $addToSet: { favouriteTeams: [req.body] } }, {
    new: true
  }).select('-password')

  if (!test) {
    return res.status(400).json({ msg: 'Failed' })
  }
  res.status(200).json({ test })

});

module.exports = router