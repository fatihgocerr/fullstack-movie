const movieRouter = require('./movie.router');
const seriesRouter = require('./series.router')
const animeRouter = require('./anime.router')
const directorRouter = require('./director.router');
const starRouter = require('./star.router');
const scriptwriterRouter = require('./scriptwriter.router');
const genreRouter = require('./genre.router')
const commentRouter = require('./comment.router')
const userRouter = require('./user.router')
const statisticsRouter = require('./statistics.router')

module.exports = {
 movieRouter,
 seriesRouter,
 animeRouter,
 directorRouter,
 starRouter,
 scriptwriterRouter,
 genreRouter,
 commentRouter,
 userRouter,
 statisticsRouter
}