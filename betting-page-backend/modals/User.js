const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favouriteTeams: {
    type: Array,
    default: []
  },
  favouriteLeagues: {
    type: Array,
    default: []
  },
  balance: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('user', UserSchema)