const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scriptwriterSchema = new Schema({
  name: {type: String, required: true},
  surname: {type: String, required: true},
  birthDate: {type: Number },
  birthPlace: {type: String },
  deathDate: {type: Number },
  deathPlace: {type: String },
  biography: {type: String },
  gender: {type: String },
  awards: {type: String },
  movies: [{type: Schema.Types.ObjectId, ref: 'Movie'}],
  series: [{type: Schema.Types.ObjectId, ref: 'Series'}],
  anime: [{ type: Schema.Types.ObjectId, ref: 'Anime' }],
  nationality: {type: String },
  image: {type: String},
  isMangaka: {type: Boolean , default: false}
 },
 {
  timestamps: true,
  minimize: true,
  autoIndex: true
 });

const Scriptwriter = mongoose.model('Scriptwriter', scriptwriterSchema, 'scriptwriter');

module.exports = Scriptwriter;
