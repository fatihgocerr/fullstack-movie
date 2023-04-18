const Movie = require('../models/movie.model');
const movieDal = require('../dal/movie.dal');
const movieDto = require('../dto/movie.dto');
const helpers = require('../utils/helpers');

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
  bannerPoster: json.bannerPoster,
  budget: json.budget,
  boxOffice: json.boxOffice,
  year: json.year,
  awards: json.awards,
  conditions: json.conditions,
  series: json.series,
  createdAt: json.createdAt,
  updatedAt: json.updatedAt
 }
 } catch (error) {
 throw new Error(error)
 }
}

exports.getAllMovies = async () => {
 try {
 const json = await movieDal.getAllMovies();
 return json
 } catch (error) {
 throw new Error(error)
 }
}

exports.getAllMoviesWithPagination = async (req) => {
 try {
  const {perpage, page, sortBy,sortDir} = req.query;
 const json = await movieDal.getAllMoviesWithPagination(
  {},
  {},
  perpage,
  perpage * page,
  {[sortBy]:sortDir}
 );
 return json
 } catch (error) {
 throw new Error(error)
 }
}

exports.getMovieById = async (req) => {
 try {
 const {id} = req.params;
 const json = await movieDal.getMovieById(id);
  const jsonChange = await helpers.jsonMovieChange(json);
 return {
  ...movieDto,
  ...jsonChange
 }
 } catch (error) {
 throw new Error(error)
 }
}

exports.updateMovieById = async (req) => {
 try {
 const {id} = req.params;
 const {name, genre, visionDate, imdbScore, directorId, stars, scriptwriter, userScore, totalVotes, trailer, tags, summary, poster, bannerPoster, budget, boxOffice, year, awards, conditions, series} = req.body;
 const json = await movieDal.updateMovieById(id, {
  name, genre, visionDate, imdbScore, directorId, stars, scriptwriter, userScore, totalVotes, trailer, tags, summary, poster, bannerPoster, budget, boxOffice, year, awards, conditions, series
 });
 return {
  ...movieDto,
  id: json._id,
  poster: json.poster, bannerPoster:json.bannerPoster,
  name, genre, visionDate, imdbScore, directorId, stars, scriptwriter, userScore, totalVotes, trailer, tags, summary, budget, boxOffice, year, awards, conditions, series
 }
 } catch (error) {
 throw new Error(error)
 }
}

exports.deleteMovieById = async (req) => {
try {
const {id} = req.params;
// poster and order delete is here
const json = await movieDal.deleteMovieById(id);
//eğer silme başarılıysa
const jsonChange = await helpers.jsonMovieChange(json);
return {
 ...movieDto,
 ...jsonChange
}
//throw error poster silinemedi
} catch (error) {
throw new Error(error)
}
}

