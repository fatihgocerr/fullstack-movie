const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scriptwriterSchema = new Schema({
  name: {type: String, required: true},
  surname: {type: String, required: true},
  birthDate: {type: Number, required: true},
  birthPlace: {type: String, required: true},
  deathDate: {type: Number, required: true},
  deathPlace: {type: String, required: true},
  biography: {type: String, required: true},
  gender: {type: String, required: true},
  awards: {type: String, required: true},
  movies: {type: Schema.Types.ObjectId, ref: 'Movie'},
  series: {type: Schema.Types.ObjectId, ref: 'Series'},
  nationality: {type: String, required: true},
  image: {type: String, required: true},
  isMangaka: {type: Boolean, required: true}
 },
 {
  timestamps: true,
  minimize: true,
  autoIndex: true
 });

const Scriptwriter = mongoose.model('Scriptwriter', scriptwriterSchema, 'scriptwriter');

module.exports = Scriptwriter;