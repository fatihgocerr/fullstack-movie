const Movie = require('../models/movie.model');
const Anime = require('../models/anime.model');
const Series = require('../models/series.model');



const searchAccessLayer = {
 async searchData(where = {}, populate) {
  await Movie.createIndexes({name: "text"})
  await Anime.createIndexes({name: "text"})
  await Series.createIndexes({name: "text"})
  // const results = await Movie.aggregate([
  //  {
  //   $match: {$text : {$search: where}}
  //  },
  //  {
  //   $lookup: {
  //    from: "Series",
  //    localField:'name',
  //    foreignField:'name',
  //    as: "series"
  //   }
  //  },
  //  {
  //   $lookup: {
  //    from: "Anime",
  //    localField:'name',
  //    foreignField:'name',
  //    as: "anime"
  //   }
  //  }
  // ]);


  // const result = await Movie.aggregate([
  //  {
  //   $text: { $search: where }
  //  },
  //  {
  //   $project: {
  //    name: 1,
  //    type: 'movie'
  //   }
  //  },
  //  {
  //   $unionWith: {
  //    coll: 'animes',
  //    pipeline: [
  //     {
  //      $search: {
  //       search: {
  //        query: where,
  //        path: 'name'
  //       }
  //      }
  //     },
  //     {
  //      $project: {
  //       name: 1,
  //       type: 'anime'
  //      }
  //     }
  //    ]
  //   }
  //  },
  //  {
  //   $unionWith: {
  //    coll: 'series',
  //    pipeline: [
  //     {
  //      $search: {
  //       search: {
  //        query: where,
  //        path: 'name'
  //       }
  //      }
  //     },
  //     {
  //      $project: {
  //       name: 1,
  //       type: 'series'
  //      }
  //     }
  //    ]
  //   }
  //  }
  // ]);

  const searchRegex = new RegExp(where, 'i'); // i = büyük küçük harf duyarlılığı olmadan ara

  const movieResults = await Movie.find({ name: searchRegex }).select({ name: 1, type: 'movie', imdbScore:1, poster:1, year:1 });
  const animeResults = await Anime.find({ name: searchRegex }).select({ name: 1, type: 'anime',  imdbScore:1, poster:1, year:1 });
  const seriesResults = await Series.find({ name: searchRegex }).select({ name: 1, type: 'series',  imdbScore:1, poster:1, year:1 });

  const results = [...movieResults, ...animeResults, ...seriesResults];

  return results;
 }
}


module.exports = searchAccessLayer;

