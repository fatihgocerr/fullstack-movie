const movieController = require('./movie.controller');
const seriesController = require('./series.controller');
const animeController = require('./anime.controller')
const directorController = require('./director.controller');
const starController = require('./star.controller');
const scriptwriterController = require('./scriptwriter.controller');
const genreController = require('./genre.controller');
const commentController = require('./comment.controller');
const userController = require('./user.controller');
const statisticsController = require('./statistics.controller');
const searchController = require('./search.controller');



module.exports = {
 movieController,
 seriesController,
 animeController,
 directorController,
 starController,
 scriptwriterController,
 genreController,
 commentController,
 userController,
 statisticsController,
 searchController
};