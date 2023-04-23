const Series = require('../models/series.model');

const SeriesDataAccessLayer = {
 async create(series) {
  return await series.save();
 },
 async getAll(where = {}, populate) {
  return await Series.find(where)
   .populate(populate);
 },
 async getAllWithPagination(where = {}, populate, limit, skip, sort) {
  return await Series.find()
   .limit(limit)
   .skip(skip)
   .sort(sort)
   .populate(populate)
 },
 async getById(id) {
  return await Series.findById({_id: id});
 },
 async updateById(id, body) {
  return await Series.findByIdAndUpdate({_id: id}, body);
 },
 async deleteById(id) {
  return await Series.findByIdAndDelete({_id: id})
 },

 async getScore(id) {
  const scores = await Series.aggregate([
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
  const scores = await Series.aggregate([
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

module.exports = SeriesDataAccessLayer;