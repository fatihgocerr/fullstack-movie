const Scriptwriter = require('../models/scriptwriter.model');


const ScriptwriterDataAccessLayer = {
 async createScriptwriter(scriptwriter) {
  return await scriptwriter.save();
 },
 async getAllScriptwriter() {
  return await Scriptwriter.find();
 },
 async getAllScriptwriterWithPagination(where = {}, populate, limit, skip,sort) {
  return await Scriptwriter.find()
   .limit(limit)
   .skip(skip)
   .sort(sort)
  // .populate(populate)
 },
 async getScriptwriterById(id) {
  return await Scriptwriter.findById({_id: id});
 },
 async updateScriptwriterById(id, body) {
  return await Scriptwriter.findByIdAndUpdate({_id: id}, body);
 },
 async deleteScriptwriterById(id) {
  return await Scriptwriter.findByIdAndDelete({_id: id})
 }
}

module.exports = ScriptwriterDataAccessLayer;