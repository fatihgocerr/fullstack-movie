const Director = require('../models/director.model');
const directorDal = require('../dal/director.dal');
const directorDto = require('../dto/director.dto');
const helpers = require('../utils/helpers');

exports.createDirector = async (req, res) => {
 try {
const {name, surname, birthDate, birthPlace, deathDate, deathPlace, gender,series,nationality, biography, image, awards, conditions, movies} = req.body;
const director = new Director({
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
const json = await directorDal.createDirector(director);
const jsonChange =await  helpers.jsonDirectorChange(json)
  console.log(jsonChange)
return {
 ...directorDto,
 ...jsonChange
}
 } catch (error) {
 throw new Error(error)
 }
}


exports.getAllDirectors = async () => {
 try {
  const json = await directorDal.getAllDirector();
  return json
 } catch (error) {
  throw new Error(error)
 }
}


exports.getAllDirectorWithPagination = async (req,res) => {
 try {
  const { perpage, page, sortBy, sortDir } = req.query;
  const json = await directorDal.getAllDirectorWithPagination(
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


exports.getDirectorById = async (req) => {
 try {
  const {id} = req.params;
  const json = await directorDal.getDirectorById(id);
  const jsonChange = await helpers.jsonDirectorChange(json);
  return {
   ...directorDto,
   ...jsonChange
  }
 } catch (error) {
  throw new Error(error)
 }
}

exports.updateDirectorById = async (req) => {
 try {
  const {id} = req.params;
  const body = req.body;
  const json = await directorDal.updateDirectorById(id, {
   body
  });
  return {
   ...directorDto,
   id: json._id,
   poster: json.poster,
   ...body
  }
 } catch (error) {
  throw new Error(error)
 }
}

exports.deleteDirectorById = async (req) => {
 try {
  const {id} = req.params;
// poster and order delete is here
  const json = await directorDal.deleteDirectorById(id);
//eğer silme başarılıysa
  const jsonChange = await helpers.jsonDirectorChange(json);
  return {
   ...directorDal,
   ...jsonChange
  }
//throw error poster silinemedi
 } catch (error) {
  throw new Error(error)
 }
}