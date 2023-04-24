const Anime = require('../models/anime.model');

const AnimeDataAccessLayer = {
 async create(anime) {
  return await anime.save();
 },
 async getAll(where = {}, populate) {
  return await Anime.find(where)
   .populate(populate);
 },
 async getAllWithPagination(where = {}, populate, limit, skip, sort) {
  return await Anime.find()
   .limit(limit)
   .skip(skip)
   .sort(sort)
   .populate(populate)
 },
 async getById(id) {
  return await Anime.findById({_id: id});
 },
 async updateById(id, body) {
  return await Anime.findByIdAndUpdate({_id: id}, body);
 },
 async deleteById(id) {
  return await Anime.findByIdAndDelete({_id: id})
 },

 async getScore(id) {
  const scores = await Anime.aggregate([
   {
    $addFields: { totalVotes : { $size: "$userScore" } }
   },
   {
    $unwind: "$userScore" // userScore alanını ayrıştır
   },
   {
    $group: {
     _id: "$_id",
     average: {$avg: "$userScore"}, // userScore alanının ortalamasını hesapla
     totalVotes: { $first: "$totalVotes" } // totalVotes alanını ilk değer olarak ata
    }
   }
  ]);
  for (const item of scores) {
   if (item._id.toString() === id) {
    return item
   }
  }

 },

 async getScores() {
  const scores = await Anime.aggregate([
   {
    $addFields: {
     totalVotes: { $size: "$userScore" } // userScore dizisinin uzunluğunu hesapla ve totalVotes alanına ekle
    }
   },
   {
    $unwind: "$userScore" // userScore alanını ayrıştır
   },
   {
    $group: {
     _id: "$_id",
     average: {$avg: "$userScore"}, // userScore alanının ortalamasını hesapla,
     totalVotes: { $first: "$totalVotes" } // totalVotes alanını ilk değer olarak ata
    }
   }]);
  return scores
 },



}

module.exports = AnimeDataAccessLayer;