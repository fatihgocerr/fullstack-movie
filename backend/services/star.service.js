const Star = require('../models/star.model');
const starDal = require('../dal/star.dal');
const starDto = require('../dto/star.dto');
const helpers = require('../utils/helpers');

exports.createStar = async (req, res) => {
 try {
  const {name, surname, birthDate, birthPlace, deathDate, deathPlace, gender,series,nationality, biography, image, awards, conditions, movies} = req.body;
  const star = new Star({
   name,
   surname,
   birthDate,
   birthPlace,
   deathDate,
   deathPlace,
   biography,
   gender,
   awards,
   movies,
   series,
   nationality,
   image
  });
  const json = await starDal.create(star);
  const jsonChange =await  helpers.jsonStarChange(json)
  console.log(jsonChange)
  return {
   ...starDto,
   ...jsonChange
  }
 } catch (error) {
  throw new Error(error)
 }
}


exports.getAllStars = async () => {
 try {
  const json = await starDal.getAllStar();
  return json
 } catch (error) {
  throw new Error(error)
 }
}


exports.getAllStarWithPagination = async (req,res) => {
 try {
  const { perpage, page, sortBy, sortDir } = req.query;
  const json = await starDal.getAllStarWithPagination(
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


exports.getById = async (req) => {
 try {
  const {id} = req.params;
  const json = await starDal.getById(id);
  const jsonChange = await helpers.jsonStarChange(json);
  return {
   ...starDto,
   ...jsonChange
  }
 } catch (error) {
  throw new Error(error)
 }
}

exports.updateById = async (req) => {
 try {
  const {id} = req.params;
  const {name, surname, birthDate, birthPlace, deathDate, deathPlace, gender,series,nationality, biography, image, awards, conditions, movies} = req.body;
const jsonChange = await helpers.jsonStarChange(req.body);
  const json = await starDal.updateById(id, {
   name, surname, birthDate, birthPlace, deathDate, deathPlace, gender,series,nationality, biography, image, awards, movies
  });
  return {
   ...starDto,
   id: json._id,
   poster: json.poster,
   ...jsonChange
  }
 } catch (error) {
  throw new Error(error)
 }
}

exports.deleteById = async (req) => {
 try {
  const {id} = req.params;
// poster and order delete is here
  const json = await starDal.deleteById(id);
//eğer silme başarılıysa
  const jsonChange = await helpers.jsonStarChange(json);
  return {
   ...starDal,
   ...jsonChange
  }
//throw error poster silinemedi
 } catch (error) {
  throw new Error(error)
 }
}