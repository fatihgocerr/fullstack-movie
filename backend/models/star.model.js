const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const starSchema = new Schema({
  name: {type: String, required: true},
  surname: {type: String, required: true},
  birthDate: {type: Number, },
  birthPlace: {type: String, },
  deathDate: {type: Number, },
  deathPlace: {type: String, },
  biography: {type: String, },
  gender: {type: String, },
  awards: {type: String, },
  movies: [{type: Schema.Types.ObjectId, ref: 'Movie'}],
  series: [{type: Schema.Types.ObjectId, ref: 'Series'}],
  anime: [{ type: Schema.Types.ObjectId, ref: 'Anime' }],
  nationality: {type: String, },
  image: {type: String, }
 },
 {
  timestamps: true,
  minimize: true,
  autoIndex: true
 });

const Star = mongoose.model('Star', starSchema, 'stars');

module.exports = Star;
