const movieRouter = require('./movie.router');
const directorRouter = require('./director.router');
const starRouter = require('./star.router');
const scriptwriterRouter = require('./scriptwriter.router');
const genreRouter = require('./genre.router')
const commentRouter = require('./comment.router')

module.exports = {
 movieRouter,
 directorRouter,
 starRouter,
 scriptwriterRouter,
 genreRouter,
 commentRouter
}