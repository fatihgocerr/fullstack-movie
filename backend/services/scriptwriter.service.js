const Scriptwriter = require('../models/scriptwriter.model');
const scriptwriterDal = require('../dal/scriptwriter.dal');
const scriptwriterDto = require('../dto/scriptwriter.dto');
const helpers = require('../utils/helpers');

exports.createScriptwriter = async (req, res) => {
 try {
  const {name, surname, birthDate, birthPlace, deathDate, deathPlace, gender,series,nationality, biography, image, awards, conditions, movies,isMangaka} = req.body;
  const scriptwriter = new Scriptwriter({
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
   image,
   isMangaka
  });
  const json = await scriptwriterDal.createScriptwriter(scriptwriter);
  const jsonChange =await  helpers.jsonScriptwriterChange(json)
  console.log(jsonChange)
  return {
   ...scriptwriterDto,
   ...jsonChange
  }
 } catch (error) {
  throw new Error(error)
 }
}


exports.getAllScriptwriters = async () => {
 try {
  const json = await scriptwriterDal.getAllScriptwriter();
  return json
 } catch (error) {
  throw new Error(error)
 }
}


exports.getAllScriptwriterWithPagination = async (req,res) => {
 try {
  const { perpage, page, sortBy, sortDir } = req.query;
  const json = await scriptwriterDal.getAllScriptwriterWithPagination(
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


exports.getScriptwriterById = async (req) => {
 try {
  const {id} = req.params;
  const json = await scriptwriterDal.getScriptwriterById(id);
  const jsonChange = await helpers.jsonScriptwriterChange(json);
  return {
   ...scriptwriterDto,
   ...jsonChange
  }
 } catch (error) {
  throw new Error(error)
 }
}

exports.updateScriptwriterById = async (req) => {
 try {
  const {id} = req.params;
  const {name, surname, birthDate, birthPlace, deathDate, deathPlace, gender,series,nationality, biography, image, awards, conditions, movies,isMangaka} = req.body;
  const json = await scriptwriterDal.updateScriptwriterById(id, {
   name, surname, birthDate, birthPlace, deathDate, deathPlace, gender,series,nationality, biography, image, awards, movies,isMangaka
  });
  const jsonChange = await helpers.jsonScriptwriterChange(req.body);

  return {
   ...scriptwriterDto,
   id: json._id,
   poster: json.poster,
   ...jsonChange
  }
 } catch (error) {
  console.log(error)
  throw new Error(error)
 }
}

exports.deleteScriptwriterById = async (req) => {
 try {
  const {id} = req.params;
// poster and order delete is here
  const json = await scriptwriterDal.deleteScriptwriterById(id);
//eğer silme başarılıysa
  const jsonChange = await helpers.jsonScriptwriterChange(json);
  return {
   ...scriptwriterDal,
   ...jsonChange
  }
//throw error poster silinemedi
 } catch (error) {
  throw new Error(error)
 }
}