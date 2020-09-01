const mongoose = require('mongoose');

const FavouriteTeamSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  teamName: {
    type: String,
    required: true
  },
  teamNumber: {
    type: Number,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('favouriteTeam', FavouriteTeamSchema)