const Movie = require('../models/movie.model');
const movieDal = require('../dal/movie.dal');
const movieDto = require('../dto/movie.dto');


exports.createMovie = async (req, res) => {
 try {
 const {name, genre, visionDate, imdbScore, directorId, stars, scriptwriter, userScore, totalVotes, trailer, tags, summary, poster, budget, boxOffice, year, awards, conditions, series} = req.body;
 const movie = new Movie({
 name,
 genre,
 visionDate,
 imdbScore,
 directorId,
 stars,
 scriptwriter,
 userScore,
 totalVotes,
 trailer,
 tags,
 summary,
 poster,
 budget,
 boxOffice,
 year,
 awards,
 conditions,
 series
 });
 const json = await movieDal.createMovie(movie);
 return {
  ...movieDto,
  id: json._id,
  name: json.name,
  genre: json.genre,
  visionDate: json.visionDate,
  imdbScore: json.imdbScore,
  directorId: json.directorId,
  stars: json.stars,
  scriptwriter: json.scriptwriter,
  userScore: json.userScore,
  totalVotes: json.totalVotes,
  trailer: json.trailer,
  tags: json.tags,
  summary: json.summary,
  poster: json.poster,
  budget: json.budget,
  boxOffice: json.boxOffice,
  year: json.year,
  awards: json.awards,
  conditions: json.conditions,
  series: json.series
 }
 } catch (error) {
 throw new Error(error)
 }
}

