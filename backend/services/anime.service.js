const Anime = require('../models/anime.model');
const animeDal = require('../dal/anime.dal');
const animeDto = require('../dto/anime.dto')
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
  const animeData = new Anime({
   name,
   genre,
   visionDate,
   imdbScore,
   directorId,
   stars,
   scriptwriter,
   userScore: await helpers.randomArray(6, 1, 10000),
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

  const findedDirectors = await helpers.findedDataMap(directorId, directorDal);
  const findedGenres = await helpers.findedDataMap(genre, genreDal);
  const findedStars = await helpers.findedDataMap(stars, starDal);
  const findedScriptwriters = await helpers.findedDataMap(scriptwriter, scriptwriterDal);

  const json = await animeDal.create(animeData)
  try {
   await Promise.all([
    helpers.findedAnimeDataPush(findedDirectors, directorDal, json._id),
    helpers.findedAnimeDataPush(findedGenres, genreDal, json._id),
    helpers.findedAnimeDataPush(findedStars, starDal, json._id),
    helpers.findedAnimeDataPush(findedScriptwriters, scriptwriterDal, json._id)
   ])
   console.log('Anime created successfully')
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
  const score = await animeDal.getScores();
  const json = await animeDal.getAll(
   {},
   [
    {
     path: 'directorId',
     select: {fullName: {$concat: ['$name', ' ', '$surname']}, image: 1},

    },
    {
     path: 'stars',
     select: {fullName: {$concat: ['$name', ' ', '$surname']}, image: 1},

    },
    {
     path: 'scriptwriter',
     select: {fullName: {$concat: ['$name', ' ', '$surname']}, image: 1},

    },
    {
     path: 'genre',
     select: 'name'
    },
   ]
  );

  for (const item of json) {
   const animeScore = score.find(s => s._id.toString() === item._id.toString());
   if (animeScore) {
    item.userScore = animeScore.average;
    item.totalVotes = animeScore.totalVotes;
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
  const score = await animeDal.getScores();
  const json = await animeDal.getAllWithPagination(
   {},
   [
    {
     path: 'directorId',
     select: {fullName: {$concat: ['$name', ' ', '$surname']}, image: 1},

    },
    {
     path: 'stars',
     select: {fullName: {$concat: ['$name', ' ', '$surname']}, image: 1},

    },
    {
     path: 'scriptwriter',
     select: {fullName: {$concat: ['$name', ' ', '$surname']}, image: 1},

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
   const animeScore = score.find(s => s._id.toString() === item._id.toString());
   if (animeScore) {
    item.userScore = animeScore.average;
    item.totalVotes = animeScore.totalVotes;
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
  const json = await animeDal.getById(id);
  const score = await animeDal.getScore(id);

  const jsonChange = await helpers.jsonMovieChange(json, score);
  return {
   ...animeDto,
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
  const json = await animeDal.updateById(id, {
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
   ...animeDto,
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
}

exports.deleteById = async (req) => {
 try {
  const {id} = req.params;
  const findedAnime = await animeDal.getById(id);
  const isPosterDeleted = await helpers.deleteImageFromDisk(findedAnime.poster ? findedAnime.poster.split('/uploads/')[1] : '');
  const isDeletedBannerPoster = await helpers.deleteImageFromDisk(findedAnime.bannerPoster ? findedAnime.bannerPoster.split('/uploads/')[1] : '');

  if (!isPosterDeleted || !isDeletedBannerPoster) {
   const json = await animeDal.deleteById(id);
   //filmin ilgili kısımlarından gelen gelen id'lere göre ilgili alanların bilgilerini çeker ör:movies.gere => genre
   const findedDirectors = await helpers.findedDataMap(findedAnime.directorId, directorDal);
   const findedGenres = await helpers.findedDataMap(findedAnime.genre, genreDal);
   const findedStars = await helpers.findedDataMap(findedAnime.stars, starDal);
   const findedScriptwriters = await helpers.findedDataMap(findedAnime.scriptwriter, scriptwriterDal);

   //ilgili alanlardan dizinin id'sini siler
   await Promise.all([
    helpers.deleteAnimeDatafilter(findedDirectors, directorDal, findedAnime._id),
    helpers.deleteAnimeDatafilter(findedGenres, genreDal, findedAnime._id),
    helpers.deleteAnimeDatafilter(findedStars, starDal, findedAnime._id),
    helpers.deleteAnimeDatafilter(findedScriptwriters, scriptwriterDal, findedAnime._id)
   ]);

   const jsonChange = await helpers.jsonMovieChange(json);
   return {
    ...animeDal,
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
  const json = await animeDal.updateById(id, updateFields);
  return {
   ...animeDto,
   id: json._id,
   name: json.name,
   poster: str[0] !== false ? str[0] : animeDto.poster,
   bannerPoster: str[1] !== false ? str[1] : animeDto.bannerPoster,
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
  const findedAnime = await animeDal.getById(id);
  console.log('my', findedAnime.poster.split('/uploads/')[1])

  const isDeletedPoster = await helpers.deleteImageFromDisk(findedAnime.poster ? findedAnime.poster.split('/uploads/')[1] : '');
  const isDeletedBannerPoster = await helpers.deleteImageFromDisk(findedAnime.bannerPoster ? findedAnime.bannerPoster.split('/uploads/')[1] : '');

  if (!isDeletedPoster && !isDeletedBannerPoster) {
   const json = await animeDal.updateById(id, updateFields);

   return {
    ...animeDto,
    id: json._id,
    name: json.name,
    poster: str[0] !== false ? str[0] : animeDto.poster,
    bannerPoster: str[1] !== false ? str[1] : animeDto.bannerPoster,
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

  const findedAnime = await animeDal.getById(id);
  console.log(findedAnime.userScore)
  console.log(userScore)

  findedAnime.userScore.push(userScore);
  const json = await animeDal.create(findedAnime)

  // return
  // const json = await animeDal.updateById(id, {
  //
  // });
  return {
   ...animeDto,
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
  const scores = await animeDal.getScore(id);
  console.log('scores', scores)
  return scores

 } catch (error) {
  throw new Error(error)
 }
}
