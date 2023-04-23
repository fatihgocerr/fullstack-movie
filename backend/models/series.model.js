const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const seriesSchema = new Schema({
 name: {type: String, required: true},
 genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}],
 visionDate: {type: String, required: true},
 imdbScore: {type: Number, required: true},
 directorId: [{
  type: Schema.Types.ObjectId, ref: 'Director'
 }],
 stars: [{type: Schema.Types.ObjectId, ref: 'Star'}],
 scriptwriter: [{
  type: Schema.Types.ObjectId, ref: 'Scriptwriter'
 }],
 userScore: [{type: Number, required: true}],
 totalVotes: {type: Number, required: true},
 trailer: {type: String, required: true},
 tags: {type: String, required: true},
 summary: {type: String, required: true},
 poster: {type: String, required: true},
 bannerPoster: {type: String, required: true},
 budget: {type: Number, required: true},
 boxOffice: {type: Number, required: true},
 year: {type: Number, required: true},
 awards: {type: String, required: true},
 conditions: {type: String, required: true},//genel izleyici , 15+ olumsuz öğeler vs diziden de gelebilir
 series: {type: Boolean, required: true},
 country: {type: String},
 language: {type: String, required: true},
 producer: {type: String, required: true},
 seriesSeason: {type: Number, required: true},
 seriesEpisode: {type: Number, required: true},
 seriesEpisodeName: {type: String, required: true},
 seriesEpisodeSummary: {type: String, required: true},
 seriesEpisodePoster: {type: String, required: true},
 seriesEpisodeTrailer: {type: String, required: true},
 seriesEpisodeVisionDate: {type: Date, required: true},
 seriesEpisodeImdbScore: {type: Number, required: true},
 seriesEpisodeUserScore: {type: Number, required: true},
 seriesEpisodeTotalVotes: {type: Number, required: true},
 seriesEpisodeAwards: {type: String, required: true},
 seriesEpisodeTags: {type: String, required: true},
 seriesEpisodeBudget: {type: Number, required: true},
 seriesEpisodeBoxOffice: {type: Number, required: true},
 seriesEpisodeYear: {type: Number, required: true},
 seriesEpisodeConditions: {type: String, required: true},
 seriesEpisodeDirectorId: {type: Schema.Types.ObjectId, ref: 'Director'},
 seriesEpisodeScriptwriterId: {type: Schema.Types.ObjectId, ref: 'Scriptwriter'},
 seriesEpisodeStars: {type: Schema.Types.ObjectId, ref: 'Star'},

}, {
 timestamps: true, minimize: true, autoIndex: true
});

const Series = mongoose.model('Series', seriesSchema, 'series');
module.exports = Series;