const Series = require('../models/series.model');
const seriesDal = require('../dal/series.dal');
const seriesDto = require('../dto/series.dto');
const helpers = require('../utils/helpers');

const directorDal = require('../dal/director.dal');
const genreDal = require('../dal/genre.dal');
const starDal = require('../dal/star.dal');
const scriptwriterDal = require('../dal/scriptwriter.dal');
const fileService = require('./file.service');


exports.create = async (req, res) => {
 try {
  const {
   name,
   genre,
   visionDate,
   imdbScore,
   directorId,
   stars,
   scriptwriter,
   trailer,
   tags,
   summary,
   // bannerPoster,
   // poster,
   budget,
   boxOffice,
   year,
   awards,
   conditions,
   series,
   seriesSeason,
   seriesEpisode,
   seriesEpisodeName,
   seriesEpisodeSummary,
   seriesEpisodePoster,
   seriesEpisodeTrailer,
   seriesEpisodeVisionDate,
   seriesEpisodeImdbScore,
   seriesEpisodeUserScore,
   seriesEpisodeTotalVotes,
   seriesEpisodeAwards,
   seriesEpisodeTags,
   seriesEpisodeBudget,
   seriesEpisodeBoxOffice,
   seriesEpisodeYear,
   seriesEpisodeConditions,
   seriesEpisodeDirectorId,
   seriesEpisodeScriptwriterId,
   seriesEpisodeStars,
   seriesEpisodeId,
   county,
   language,
   producer,
  } = req.body;
  const seriesData = new Series({
   name,
   genre,
   visionDate,
   imdbScore,
   directorId,
   stars,
   scriptwriter,
   trailer,
   tags,
   summary,
   // bannerPoster,
   // poster,
   budget,
   boxOffice,
   year,
   awards,
   conditions,
   series,
   seriesSeason,
   seriesEpisode,
   seriesEpisodeName,
   seriesEpisodeSummary,
   seriesEpisodePoster,
   seriesEpisodeTrailer,
   seriesEpisodeVisionDate,
   seriesEpisodeImdbScore,
   seriesEpisodeUserScore,
   seriesEpisodeTotalVotes,
   seriesEpisodeAwards,
   seriesEpisodeTags,
   seriesEpisodeBudget,
   seriesEpisodeBoxOffice,
   seriesEpisodeYear,
   seriesEpisodeConditions,
   seriesEpisodeDirectorId,
   seriesEpisodeScriptwriterId,
   seriesEpisodeStars,
   seriesEpisodeId,
   county,
   language,
   producer,
  });

  const findedDirectors = await helpers.findedDataMap(directorId, directorDal);
  const findedGenres = await helpers.findedDataMap(genre, genreDal);
  const findedStars = await helpers.findedDataMap(stars, starDal);
  const findedScriptwriters = await helpers.findedDataMap(scriptwriter, scriptwriterDal);

  const json = await seriesDal.create(seriesData)
  try {
   await Promise.all([
    helpers.findedSeriesDataPush(findedDirectors, directorDal, json._id),
    helpers.findedSeriesDataPush(findedGenres, genreDal, json._id),
    helpers.findedSeriesDataPush(findedStars, starDal, json._id),
    helpers.findedSeriesDataPush(findedScriptwriters, scriptwriterDal, json._id)
   ])
   console.log('Series created successfully')
  } catch (error) {
   console.log(error)
  }
  return json
  // return {
  //  ...seriesDto,
  //  id: json._id,
  //  name: json.name,
  //  genre: json.genre,
  //  visionDate: json.visionDate,
  //  imdbScore: json.imdbScore,
  //  directorId: json.directorId,
  //  stars: json.stars,
  //  scriptwriter: json.scriptwriter,
  //  userScore: json.userScore,
  //  totalVotes: json.totalVotes,
  //  trailer: json.trailer,
  //  tags: json.tags,
  //  summary: json.summary,
  //  poster: json.poster,
  //  bannerPoster: json.bannerPoster,
  //  budget: json.budget,
  //  boxOffice: json.boxOffice,
  //  year: json.year,
  //  awards: json.awards,
  //  conditions: json.conditions,
  //  series: json.series,
  //  createdAt: json.createdAt,
  //  updatedAt: json.updatedAt
  // }
 } catch (error) {
  console.log(error)
  throw new Error(error)
 }
}


exports.getAll = async () => {
 try {

  const score = await seriesDal.getScores();
  const json = await seriesDal.getAll(
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

  for (const item of json) {
   const movieScore = score.find(s => s._id.toString() === item._id.toString());
   if (movieScore) {
    item.userScore = movieScore.average;
    item.totalVotes = movieScore.totalVotes;
   }
  }
  return json
 } catch (error) {
  console.log(error)
  throw new Error(error)
 }
}


exports.getAllWithPagination = async (req) => {
 try {
  const {perpage, page, sortBy, sortDir} = req.query;
  const score = await seriesDal.getScores();
  const json = await seriesDal.getAllWithPagination(
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


  for (const item of json) {
   const movieScore = score.find(s => s._id.toString() === item._id.toString());
   if (movieScore) {
    item.userScore = movieScore.average;
    item.totalVotes = movieScore.totalVotes;
   }
  }
  return json
 } catch (error) {
  throw new Error(error)
 }
}

exports.getById = async (req) => {
 try {
  const {id} = req.params;
  const json = await seriesDal.getById(id);
  const score = await seriesDal.getScore(id);

  const jsonChange = await helpers.jsonMovieChange(json, score);
  return {
   ...seriesDto,
   ...jsonChange
  }
 } catch (error) {
  throw new Error(error)
 }
}

exports.updateById = async (req) => {
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
   series,
   seriesSeason,
   seriesEpisode,
   seriesEpisodeName,
   seriesEpisodeSummary,
   seriesEpisodePoster,
   seriesEpisodeTrailer,
   seriesEpisodeVisionDate,
   seriesEpisodeImdbScore,
   seriesEpisodeUserScore,
   seriesEpisodeTotalVotes,
   seriesEpisodeAwards,
   seriesEpisodeTags,
   seriesEpisodeBudget,
   seriesEpisodeBoxOffice,
   seriesEpisodeYear,
   seriesEpisodeConditions,
   seriesEpisodeDirectorId,
   seriesEpisodeScriptwriterId,
   seriesEpisodeStars,
   seriesEpisodeId,
   county,
   language,
   producer,
  } = req.body;
  const findedDirectors = await helpers.findedDataMap(directorId, directorDal);
  const findedGenres = await helpers.findedDataMap(genre, genreDal);
  const findedStars = await helpers.findedDataMap(stars, starDal);
  const findedScriptwriters = await helpers.findedDataMap(scriptwriter, scriptwriterDal);


  await Promise.all([
   helpers.findedSeriesDataPush(findedDirectors, directorDal, id),
   helpers.findedSeriesDataPush(findedGenres, genreDal, id),
   helpers.findedSeriesDataPush(findedStars, starDal, id),
   helpers.findedSeriesDataPush(findedScriptwriters, scriptwriterDal, id)
  ])
  try {
   const json = await seriesDal.updateById(id, {
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
    seriesSeason,
    seriesEpisode,
    seriesEpisodeName,
    seriesEpisodeSummary,
    seriesEpisodePoster,
    seriesEpisodeTrailer,
    seriesEpisodeVisionDate,
    seriesEpisodeImdbScore,
    seriesEpisodeUserScore,
    seriesEpisodeTotalVotes,
    seriesEpisodeAwards,
    seriesEpisodeTags,
    seriesEpisodeBudget,
    seriesEpisodeBoxOffice,
    seriesEpisodeYear,
    seriesEpisodeConditions,
    seriesEpisodeDirectorId,
    seriesEpisodeScriptwriterId,
    seriesEpisodeStars,
    seriesEpisodeId,
    county,
    language,
    producer,
   });
   return {
    ...seriesDto,
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
    series,
    seriesSeason,
    seriesEpisode,
    seriesEpisodeName,
    seriesEpisodeSummary,
    seriesEpisodePoster,
    seriesEpisodeTrailer,
    seriesEpisodeVisionDate,
    seriesEpisodeImdbScore,
    seriesEpisodeUserScore,
    seriesEpisodeTotalVotes,
    seriesEpisodeAwards,
    seriesEpisodeTags,
    seriesEpisodeBudget,
    seriesEpisodeBoxOffice,
    seriesEpisodeYear,
    seriesEpisodeConditions,
    seriesEpisodeDirectorId,
    seriesEpisodeScriptwriterId,
    seriesEpisodeStars,
    seriesEpisodeId,
    county,
    language,
    producer,
   }

  } catch (error) {
   throw new Error(error)
  }
 } catch (error) {
  throw new Error(error)
 }
}

exports.deleteById = async (req) => {
 try {
  const {id} = req.params;
  const findedSeries = await seriesDal.getById(id);

  const isPosterDeleted = await helpers.deleteImageFromDisk(findedSeries.poster ? findedSeries.poster.split('/uploads/')[1] : '');
  const isDeletedBannerPoster = await helpers.deleteImageFromDisk(findedSeries.bannerPoster ? findedSeries.bannerPoster.split('/uploads/')[1] : '');

  if (!isPosterDeleted || !isDeletedBannerPoster) {
   const json = await seriesDal.deleteById(id);
   //filmin ilgili kısımlarından gelen gelen id'lere göre ilgili alanların bilgilerini çeker ör:movies.gere => genre
   const findedDirectors = await helpers.findedDataMap(findedSeries.directorId, directorDal);
   const findedGenres = await helpers.findedDataMap(findedSeries.genre, genreDal);
   const findedStars = await helpers.findedDataMap(findedSeries.stars, starDal);
   const findedScriptwriters = await helpers.findedDataMap(findedSeries.scriptwriter, scriptwriterDal);

   //ilgili alanlardan dizinin id'sini siler
   await Promise.all([
    helpers.deleteSeriesDatafilter(findedDirectors, directorDal, findedSeries._id),
    helpers.deleteSeriesDatafilter(findedGenres, genreDal, findedSeries._id),
    helpers.deleteSeriesDatafilter(findedStars, starDal, findedSeries._id),
    helpers.deleteSeriesDatafilter(findedScriptwriters, scriptwriterDal, findedSeries._id)
   ]);

   const jsonChange = await helpers.jsonMovieChange(json);
   return {
    ...seriesDto,
    id: json._id,
    name: json.name,
    ...jsonChange
   }
  }
  throw new Error('poster silinemedi')
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
  console.log(updateFields.bannerPoster)
  const json = await seriesDal.updateById(id, updateFields);
  return {
   ...seriesDto,
   id: json._id,
   name: json.name,
   poster: str[0] !== false ? str[0] : seriesDto.poster,
   bannerPoster: str[1] !== false ? str[1] : seriesDto.bannerPoster,
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

  //multiple field upload
  const updateFields = {};
  if (str[0] !== false) {
   updateFields.poster = str[0];
  }
  if (str[1] !== false) {
   updateFields.bannerPoster = str[1];
  }
  const findedSeries = await seriesDal.getById(id);
  console.log('my', findedSeries.poster.split('/uploads/')[1])

  const isDeletedPoster = await helpers.deleteImageFromDisk(findedSeries.poster ? findedSeries.poster.split('/uploads/')[1] : '');
  const isDeletedBannerPoster = await helpers.deleteImageFromDisk(findedSeries.bannerPoster ? findedSeries.bannerPoster.split('/uploads/')[1] : '');

  if (!isDeletedPoster && !isDeletedBannerPoster) {
   const json = await seriesDal.updateById(id, updateFields);

   return {
    ...seriesDto,
    id: json._id,
    name: json.name,
    poster: str[0] !== false ? str[0] : seriesDto.poster,
    bannerPoster: str[1] !== false ? str[1] : seriesDto.bannerPoster,
    createdAt: json.createdAt,
    updatedAt: json.updatedAt
   }
  }

 } catch (error) {
  throw new Error(error)
 }
}


exports.updateScore = async (req) => {
 try {
  const {id} = req.params;
  const {userScore} = req.body;

  const findedSeries = await seriesDal.getById(id);
  console.log(findedSeries.userScore)
  console.log(userScore)

  findedSeries.userScore.push(userScore);
  // işelmi yapan kullanıcının profilinde rating alanına push edilecek
  const json = await seriesDal.create(findedSeries)
  return {
   ...seriesDto,
   id: json._id,
   poster: json.poster,
   bannerPoster: json.bannerPoster,
   userScore: json.userScore.length > 1 ? json.userScore[json.userScore.length - 1] : json.userScore,

  }
 } catch (error) {
  throw new Error(error)
 }
}

exports.getScore = async (req) => {
 try {
  const {id} = req.params;
  const scores = await seriesDal.getScore(id);
  console.log('scores', scores)
  return scores

 } catch (error) {
  throw new Error(error)
 }
}
