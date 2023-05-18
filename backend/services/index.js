const movieService = require('./movie.service');
const seriesService = require('./series.service');
const animeService = require('./anime.service');
const directorService = require('./director.service');
const starService = require('./star.service');
const scriptwriterService = require('./scriptwriter.service');
const genreService = require('./genre.service');
const commentService = require('./comment.service');
const userService = require('./user.service');
const statisticsService = require('./statistics.service');
const searchService = require('./search.service');



module.exports = {
 movieService,
 seriesService,
 animeService,
 directorService,
 starService,
 scriptwriterService,
 genreService,
 commentService,
 userService,
 statisticsService,
 searchService
}