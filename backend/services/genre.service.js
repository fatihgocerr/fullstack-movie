const Genre = require('../models/genre.model');
const genreDal = require('../dal/genre.dal');
const genreDto = require('../dto/genre.dto');
const helpers = require('../utils/helpers');

exports.createGenre = async (req, res) => {
 try {
  const {name, description, image, movies, series, anime, tags} = req.body;
  const genre = new Genre({name, description, image, movies, series, anime, tags});
  const json = await genreDal.createGenre(genre);
  const jsonChange = await helpers.jsonGenreChange(json)
  return {
   ...genreDto,
   ...jsonChange
  }
 } catch (error) {
  throw new Error(error)
 }
}


exports.getAllGenres = async () => {
 try {
 const json = await genreDal.getAllGenres();
  return json
 } catch (error) {
 throw new Error(error)
 }
}


exports.getAllGenresWithPagination = async (req,res) => {
 try {
 const { perpage, page, sortBy, sortDir } = req.query;
 const json = await genreDal.getAllGenreWithPagination(
 {},
 {},
 perpage,
 perpage * page,
 { [sortBy]: sortDir }
 );
 return json
 } catch (error) {
  throw new Error(error)
 }
}

exports.getGenreById = async (req, res) => {
 try {
 const {id } = req.params;
 const json = await genreDal.getGenreById(id);
 const jsonChange = await helpers.jsonGenreChange(json)
  return {
   ...genreDto,
   ...jsonChange
  }
 } catch (error) {
 throw new Error(error)
 }
}


exports.updateGenreById = async (req,res) => {
 try {
 const {id} = req.params;
 const {name, description, image, movies, series, anime, tags} = req.body;
 const json = await genreDal.updateGenreById(id,
  {name, description, image, movies, series, anime, tags});
 const jsonChange = await helpers.jsonGenreChange(json)
  console.log('json',json)
  console.log('jsonChange', jsonChange);
  return {
  ...genreDto,
   ...jsonChange,
   name,
   description,
   image,
   movies,


  }
 } catch (error) {
 throw new Error(error)
 }
}


exports.deleteGenreById = async (req, res) => {
 try {
 const {id} = req.params;
 //file delete is here
  const json = await genreDal.deleteGenreById(id);
  // if file delete
  const jsonChange = await helpers.jsonGenreChange(json)
  return {
   ...genreDto,
   ...jsonChange
  }

 } catch (error) {
 throw new Error(error)
 }
}


