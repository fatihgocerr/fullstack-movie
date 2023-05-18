const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
   name: {type: String, text: true, index: true,  },
  genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}],
   released: {type: String,   },
   runtime: {type: String,   },
  imdbScore: {type: Number,   },
  directorId: [{
    type: Schema.Types.ObjectId,
    ref: 'Director'
  }],
  stars: [{type: Schema.Types.ObjectId, ref: 'Star'}],
  scriptwriter: [{
    type: Schema.Types.ObjectId,
    ref: 'Scriptwriter'
  }],
  userScore:[ {type: Number, }],
  totalVotes: {type: Number,},
  trailer: {type: String,   },
  tags: {type: String,   },
  summary: {type: String,},
  poster: {type: String, },
  bannerPoster: {type: String,},
  budget: {type: Number, },
  boxOffice: {type: Number, },
  year: {type: Number,   },
  awards: {type: String, },
  conditions: {type: String, },//genel izleyici , 15+ olumsuz öğeler vs diziden de gelebilir
  series: {type: Boolean, },
  country: {type: String,   },
  language: {type: String,   },
  producer: {type: String}
 },
 {
  timestamps: true,
  minimize: true,
  autoIndex: true
 });

const Movie = mongoose.model('Movie', movieSchema, 'movies');
module.exports = Movie;
//dizi modelde kullanılabilir veriler
// seriesSeason: {type: Number,   },
// seriesEpisode: {type: Number,   },
// seriesEpisodeName: {type: String,   },
// seriesEpisodeSummary: {type: String,   },
// seriesEpisodePoster: {type: String,   },
// seriesEpisodeTrailer: {type: String,   },
// seriesEpisodeVisionDate: {type: Date,   },
// seriesEpisodeImdbScore: {type: Number,   },
// seriesEpisodeUserScore: {type: Number,   },
// seriesEpisodeTotalVotes: {type: Number,   },
// seriesEpisodeAwards: {type: String,   },
// seriesEpisodeTags: {type: String,   },
// seriesEpisodeBudget: {type: Number,   },
// seriesEpisodeBoxOffice: {type: Number,   },
// seriesEpisodeYear: {type: Number,   },
// seriesEpisodeConditions: {type: String,   },
// seriesEpisodeDirectorId: {type: Schema.Types.ObjectId, ref: 'Director'},
// seriesEpisodeScriptwriterId: {type: Schema.Types.ObjectId, ref: 'Scriptwriter'},
// seriesEpisodeStars: {type: Schema.Types.ObjectId, ref: 'Star'},