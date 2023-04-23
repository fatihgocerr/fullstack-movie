const Movie = require('../models/movie.model');

const MovieDataAccessLayer = {
 async create(movie) {
  return await movie.save();
 },
 async getAllMovies(where = {}, populate) {
  return await Movie.find(where)
   .populate(populate);
 },
 async getAllMoviesWithPagination(where = {}, populate, limit, skip, sort) {
  return await Movie.find()
   .limit(limit)
   .skip(skip)
   .sort(sort)
   .populate(populate)
 },
 async getById(id) {
  return await Movie.findById({_id: id});
 },
 async updateMovieById(id, body) {
  return await Movie.findByIdAndUpdate({_id: id}, body);
 },
 async deleteMovieById(id) {
  return await Movie.findByIdAndDelete({_id: id})
 },

 async getScore(id) {
  const scores = await Movie.aggregate([
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
  const scores = await Movie.aggregate([
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

module.exports = MovieDataAccessLayer;