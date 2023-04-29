const animeValidator = require('./anime.validator');
const moviesValidator = require('./movies.validator');
const seriesValidator = require('./series.validator')
const commentValidator = require('./comment.validator')
const directorValidator = require('./director.validator')
const genreValidator = require('./genre.validator')
const scriptwriterValidator = require('./scriptwriter.validator')
const starValidator = require('./star.validator')
const userValidator = require('./user.validator')


module.exports = {
 animeValidator,
 moviesValidator,
 seriesValidator,
 commentValidator,
 directorValidator,
 genreValidator,
 scriptwriterValidator,
 starValidator,
 userValidator
}