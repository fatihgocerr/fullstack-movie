const userDal = require('../dal/user.dal')
const movieDal = require('../dal/movie.dal')
const animeDal = require('../dal/anime.dal')
const seriesDal = require('../dal/series.dal')
const genreDal = require('../dal/genre.dal')


exports.getAllCount = async (req, res) => {
 try {
  const userLength = await userDal.count();
  const movieLength = await movieDal.count();
  const animeLength = await animeDal.count();
  const seriesLength = await seriesDal.count();
  return {
   user: userLength, movie: movieLength, anime: animeLength, series: seriesLength
  }
 } catch (error) {
  throw new Error(error)
 }
}


exports.getGenreCount = async (req, res) => {
 try {
  const data = []
  const genres = await genreDal.getAllGenres();
  for (const genre of genres) {
   const movieLength = genre.movies.length;
   const animeLength = genre.anime.length;
   const seriesLength = genre.series.length;
   data.push({genre: genre.name, movie: movieLength, anime: animeLength, series: seriesLength})

  }
  return data
 } catch (error) {
  throw new Error(error)
 }
}


exports.getLatestUsers = async (req, res) => {
 const {limit} = req.query;
 try {
  const users = await userDal.getLatestUsers(limit);
  console.log('users', users)
  const newUsers = users.filter(user => user.role !== 'admin')
  return newUsers
 } catch (error) {
  throw new Error(error)
 }
}
