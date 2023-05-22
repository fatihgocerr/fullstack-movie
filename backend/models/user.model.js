const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
 username: {type: String, required: true},
 password: {type: String, required: true},
 email: {type: String, required: true},
 role: {type: String},
 profile: {
  name: {type: String},
  surname: {type: String},
  birthDate: {type: Number},
  profilePicture: {type: String},
  gender: {type: String},
  country: {type: String},
  language: {type: String}
 },
 favorites: [{
  kind: {type: String, },
  item: {type: Schema.Types.ObjectId, refPath: 'favorites.kind'}
 }],
 watchlist: [{
  kind: {type: String,},
  item: {
   type: Schema.Types.ObjectId,
   refPath: 'watchlist.kind',
  },
  watchId: {type: Schema.Types.ObjectId,},
  watchDate: {type: Number,},
  watchDuration: {type: Number,},
 }],
 ratings: [{
  kind: {type: String, },
  item: {
   type: Schema.Types.ObjectId,
   refPath: 'ratings.kind',
  },
  rating: {type: Number, }
 }],
 friends: [{
  type: Schema.Types.ObjectId,
  ref: 'User'
 }],
 settings: {
  language: {type: String,},
  notifications: {type: Boolean},
 },
 isVerified: {type: Boolean},
 verifyCode: {type: String},
}, {
 timestamps: true,
 minimize: true,
 autoIndex: true
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;