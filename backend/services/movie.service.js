const Movie = require('../models/movie.model');
const movieDal = require('../dal/movie.dal');
const movieDto = require('../dto/movie.dto');
const helpers = require('../utils/helpers');

const directorDal = require('../dal/director.dal');
const genreDal = require('../dal/genre.dal');
const starDal = require('../dal/star.dal');
const scriptwriterDal = require('../dal/scriptwriter.dal');
const fileService = require('./file.service');

exports.createMovie = async (req, res) => {
 try {
  const {
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
   bannerPoster,
   poster,
   budget,
   boxOffice,
   year,
   awards,
   conditions,
   series,
   country,
   language,
   producer
  } = req.body;
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
   bannerPoster,
   budget,
   boxOffice,
   year,
   awards,
   conditions,
   series,
   country,
   language,
   producer
  });

  const findedDirectors = await helpers.findedDataMap(directorId, directorDal);
  const findedGenres = await helpers.findedDataMap(genre, genreDal);
  const findedStars = await helpers.findedDataMap(stars, starDal);
  const findedScriptwriters = await helpers.findedDataMap(scriptwriter, scriptwriterDal);

  const json = await movieDal.create(movie)
  try {
   await Promise.all([
    helpers.findedDataPush(findedDirectors, directorDal, json._id),
    helpers.findedDataPush(findedGenres, genreDal, json._id),
    helpers.findedDataPush(findedStars, starDal, json._id),
    helpers.findedDataPush(findedScriptwriters, scriptwriterDal, json._id)
   ])
   console.log('Movie created successfully')
  } catch (error) {
   console.log(error)
  }
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
  console.log(error)
  throw new Error(error)
 }
}

exports.getAllMovies = async () => {
 try {
  const json = await movieDal.getAllMovies(
   {},
   [
    {
     path: 'directorId',
     select: 'name'
    },
    {
     path: 'stars',
     select: 'name'
    },
    {
     path: 'scriptwriter',
     select: 'name'
    },
    {
     path: 'genre',
     select: 'name'
    },
   ]
  );
  return json
 } catch (error) {
  throw new Error(error)
 }
}

exports.getAllMoviesWithPagination = async (req) => {
 try {
  const {perpage, page, sortBy, sortDir} = req.query;
  const json = await movieDal.getAllMoviesWithPagination(
   {},
   [
    {
     path: 'directorId',
     select: 'name'
    },
    {
     path: 'stars',
     select: 'name'
    },
    {
     path: 'scriptwriter',
     select: 'name'
    },
    {
     path: 'genre',
     select: 'name'
    },
   ]
   ,
   perpage,
   perpage * page,
   {[sortBy]: sortDir}
  );
  return json
 } catch (error) {
  throw new Error(error)
 }
}

exports.getById = async (req) => {
 try {
  const {id} = req.params;
  const json = await movieDal.getById(id);
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
  const {
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
   bannerPoster,
   budget,
   boxOffice,
   year,
   awards,
   conditions,
   series
  } = req.body;
  const json = await movieDal.updateMovieById(id, {
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
   bannerPoster,
   budget,
   boxOffice,
   year,
   awards,
   conditions,
   series
  });
  return {
   ...movieDto,
   id: json._id,
   poster: json.poster,
   bannerPoster: json.bannerPoster,
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
   budget,
   boxOffice,
   year,
   awards,
   conditions,
   series
  }
 } catch (error) {
  throw new Error(error)
 }
}

exports.deleteMovieById = async (req) => {
 try {
  const {id} = req.params;
  const findedMovie = await movieDal.getById(id);
  const isPosterDeleted = await helpers.deleteImageFromDisk(findedMovie.poster ? findedMovie.poster.split('/uploads/')[1] : '');
  const isDeletedBannerPoster = await helpers.deleteImageFromDisk(findedMovie.bannerPoster ? findedMovie.bannerPoster.split('/uploads/')[1] : '');


  if (!isPosterDeleted || !isDeletedBannerPoster) {
   const json = await movieDal.deleteMovieById(id);
   //filmin ilgili kısımlarından gelen gelen id'lere göre ilgili alanların bilgilerini çeker ör:movies.gere => genre
   const findedDirectors = await helpers.findedDataMap(findedMovie.directorId, directorDal);
   const findedGenres = await helpers.findedDataMap(findedMovie.genre, genreDal);
   const findedStars = await helpers.findedDataMap(findedMovie.stars, starDal);
   const findedScriptwriters = await helpers.findedDataMap(findedMovie.scriptwriter, scriptwriterDal);
   //ilgili alanlardan filmin id'sini siler
   await Promise.all([
   helpers.deleteDatafilter(findedDirectors, directorDal,findedMovie._id),
   helpers.deleteDatafilter(findedGenres, genreDal,findedMovie._id),
   helpers.deleteDatafilter(findedStars, starDal,findedMovie._id),
   helpers.deleteDatafilter(findedScriptwriters, scriptwriterDal,findedMovie._id)
   ]);
   const jsonChange = await helpers.jsonMovieChange(json);
   return {
    ...movieDto,
    id: json._id,
    name: json.name,
    ...jsonChange
   }
  }
  throw new Error('poster silinemedi')
//throw error poster silinemedi
 } catch (error) {
  throw new Error(error)
 }
}

exports.uploadImage = async (req) => {
 try {
  const {id} = req.params;
  const str = await fileService.uploadMultipleImage(req);
  //multiple field upload
  const updateFields = {};
  if (str[0] !== false) {
   updateFields.poster = str[0];
  }
  if (str[1] !== false) {
   updateFields.bannerPoster = str[1];
  }
  const json = await movieDal.updateMovieById(id, updateFields);
  return {
   ...movieDto,
   id: json._id,
   name: json.name,
   poster: str[0] !== false ? str[0] : movieDto.poster,
   bannerPoster: str[1] !== false ? str[1] : movieDto.bannerPoster,
   createdAt: json.createdAt,
   updatedAt: json.updatedAt
  };
 } catch (error) {
  throw new Error(error)
 }
}


exports.updateImage = async (req) => {
 try {
  const {id} = req.params;
  const str = await fileService.uploadMultipleImage(req);
  console.log(str)
  //multiple field upload
  const updateFields = {};
  if (str[0] !== false) {
   updateFields.poster = str[0];
  }
  if (str[1] !== false) {
   updateFields.bannerPoster = str[1];
  }
  const findedMovie = await movieDal.getById(id);
  const isDeletedPoster = await helpers.deleteImageFromDisk(findedMovie.poster ? findedMovie.poster.split('/uploads/')[1] : '');
  const isDeletedBannerPoster = await helpers.deleteImageFromDisk(findedMovie.bannerPoster ? findedMovie.bannerPoster.split('/uploads/')[1] : '');
  if (!isDeletedPoster && !isDeletedBannerPoster) {
   const json = await movieDal.updateMovieById(id, updateFields);

   return {
    ...movieDto,
    id: json._id,
    name: json.name,
    poster: str[0] !== false ? str[0] : movieDto.poster,
    bannerPoster: str[1] !== false ? str[1] : movieDto.bannerPoster,
    createdAt: json.createdAt,
    updatedAt: json.updatedAt
   }
  }

 } catch (error) {
  throw new Error(error)
 }
}
