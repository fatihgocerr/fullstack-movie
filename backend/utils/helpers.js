const jsonMovieChange = async (json) => {
 const  jsonChange  = {
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
  return await jsonChange;
}
const jsonDirectorChange = async (json) => {
 const jsonChange  = {
  id: json._id,
  name: json.name,
  surname: json.surname,
  birthDate: json.birthDate,
  birthPlace: json.birthPlace,
  deathDate: json.deathDate,
  deathPlace: json.deathPlace,
  biography: json.biography,
  gender: json.gender,
  awards: json.awards,
  movies: json.movies,
  series: json.series,
  nationality: json.nationality,
  image: json.image
 }
 return await jsonChange;
}
const jsonStarChange = async (json) => {
 const jsonChange  = {
  id: json._id,
  name: json.name,
  surname: json.surname,
  birthDate: json.birthDate,
  birthPlace: json.birthPlace,
  deathDate: json.deathDate,
  deathPlace: json.deathPlace,
  biography: json.biography,
  gender: json.gender,
  awards: json.awards,
  movies: json.movies,
  series: json.series,
  nationality: json.nationality,
  image: json.image
 }
 return await jsonChange;
}
const jsonScriptwriterChange = async (json) => {
 const jsonChange  = {
  id: json._id,
  name: json.name,
  surname: json.surname,
  birthDate: json.birthDate,
  birthPlace: json.birthPlace,
  deathDate: json.deathDate,
  deathPlace: json.deathPlace,
  biography: json.biography,
  gender: json.gender,
  awards: json.awards,
  movies: json.movies,
  series: json.series,
  nationality: json.nationality,
  image: json.image,
  isMangaka: json.isMangaka
 }
 return await jsonChange;
}
const jsonGenreChange = async (json) => {
 const jsonChange  = {
  id: json._id,
  name: json.name,
  description: json.description,
  image: json.image,
  movies: json.movies,
  series: json.series,
  anime: json.anime,
  tags: json.tags
 }
 return await jsonChange;
}


module.exports = {
 jsonMovieChange,
 jsonDirectorChange,
 jsonStarChange,
 jsonScriptwriterChange,
 jsonGenreChange
}