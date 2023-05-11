const fs = require('fs');


const moviesParentGet = () => {
 //Json dosyalarını okuma
 const genresData = fs.readFileSync('genres.json')
 const swritesData = fs.readFileSync('scriptwriters.json')
 const directorsData = fs.readFileSync('directors.json')
 const starsData = fs.readFileSync('stars.json')

//json dosyalarını parse etme
 const genres = JSON.parse(genresData)
 const swrites = JSON.parse(swritesData)
 const directors = JSON.parse(directorsData)
 const stars = JSON.parse(starsData)

//ilgili alanlar için random sayı üretme
 const randomGenre = Math.floor(Math.random() * 3) + 1
 const randomSwrites = Math.floor(Math.random() * 2) + 1
 const randomDirectors = Math.floor(Math.random() * 2) + 1
 const randomStars = Math.floor(Math.random() * 10) + 5

//ilgili alanlar için array oluşturma
 const genresIds = []
 const randomSwritesIds = []
 const randomDirectorsIds = []
 const randomStarsIds = []

//ilgili alanlara random id atama
 for (let i = 0; i < randomGenre; i++) {
  const random = Math.floor(Math.random() * genres.length)
  genresIds.push(genres[random]._id)
 }
 for (let i = 0; i < randomSwrites; i++) {
  const random = Math.floor(Math.random() * swrites.length)
  // console.log('random', i+1, swrites[random]._id)
  randomSwritesIds.push(swrites[random]._id)
 }
 for (let i = 0; i < randomDirectors; i++) {
  const random = Math.floor(Math.random() * directors.length)
  // console.log('random', i+1, directors[random]._id)
  randomDirectorsIds.push(directors[random]._id)
 }
 for (let i = 0; i < randomStars; i++) {
  const random = Math.floor(Math.random() * stars.length)
  // console.log('random', i+1, stars[random]._id)
  randomStarsIds.push(stars[random]._id)
 }

 return {
  genresIds,
  randomSwritesIds,
  randomDirectorsIds,
  randomStarsIds
 }


}

//ilgili sub itemlara movies id ekleme
const moviesParentSet = (movies, parentItem) => {
 //Json dosyalarını okuma
 const genresData = fs.readFileSync('genres.json')
 const sWritesData = fs.readFileSync('scriptwriters.json')
 const directorsData = fs.readFileSync('directors.json')
 const starsData = fs.readFileSync('stars.json')
//json dosyalarını parse etme
 const genresPush = JSON.parse(genresData)
 const sWritesPush = JSON.parse(sWritesData)
 const directorsPush = JSON.parse(directorsData)
 const starsPush = JSON.parse(starsData)

//filmelere atanan radom idlere göre ilgili alanlara film id ekleme
 for (let i = 0; i < parentItem.randomStarsIds.length; i++) {
  const element = parentItem.randomStarsIds[i];
  const stars = starsPush.find((g) => g._id === element);
  if (stars) {
   stars.movies.push(movies._id);
  }
 }

 for (let i = 0; i < parentItem.genresIds.length; i++) {
  const element = parentItem.genresIds[i];
  const genre = genresPush.find((g) => g._id === element);
  if (genre) {
   genre.movies.push(movies._id);
  }
 }

 for (let i = 0; i < parentItem.randomSwritesIds.length; i++) {
  const element = parentItem.randomSwritesIds[i];
  const scriptwriter = sWritesPush.find((g) => g._id === element);
  if (scriptwriter) {
   scriptwriter.movies.push(movies._id);
  }
 }

 for (let i = 0; i < parentItem.randomDirectorsIds.length; i++) {
  const element = parentItem.randomDirectorsIds[i];
  const directorId = directorsPush.find((g) => g._id === element);
  if (directorId) {
   console.log('directorId', directorId)
   directorId.movies.push(movies._id);
  }
 }
//Değişiklikleri ilgili json dosyalarına yazma
 fs.writeFileSync('genres.json', JSON.stringify(genresPush));
 fs.writeFileSync('scriptwriters.json', JSON.stringify(sWritesPush));
 fs.writeFileSync('directors.json', JSON.stringify(directorsPush));
 fs.writeFileSync('stars.json', JSON.stringify(starsPush));
}
const seriesParentSet = (series, parentItem) => {
 //Json dosyalarını okuma
 const genresData = fs.readFileSync('genres.json')
 const sWritesData = fs.readFileSync('scriptwriters.json')
 const directorsData = fs.readFileSync('directors.json')
 const starsData = fs.readFileSync('stars.json')
//json dosyalarını parse etme
 const genresPush = JSON.parse(genresData)
 const sWritesPush = JSON.parse(sWritesData)
 const directorsPush = JSON.parse(directorsData)
 const starsPush = JSON.parse(starsData)

//filmelere atanan radom idlere göre ilgili alanlara film id ekleme
 for (let i = 0; i < parentItem.randomStarsIds.length; i++) {
  const element = parentItem.randomStarsIds[i];
  const stars = starsPush.find((g) => g._id === element);
  if (stars) {
   stars.series.push(series._id);
  }
 }

 for (let i = 0; i < parentItem.genresIds.length; i++) {
  const element = parentItem.genresIds[i];
  const genre = genresPush.find((g) => g._id === element);
  if (genre) {
   genre.series.push(series._id);
  }
 }

 for (let i = 0; i < parentItem.randomSwritesIds.length; i++) {
  const element = parentItem.randomSwritesIds[i];
  const scriptwriter = sWritesPush.find((g) => g._id === element);
  if (scriptwriter) {
   scriptwriter.series.push(series._id);
  }
 }

 for (let i = 0; i < parentItem.randomDirectorsIds.length; i++) {
  const element = parentItem.randomDirectorsIds[i];
  const directorId = directorsPush.find((g) => g._id === element);
  if (directorId) {
   console.log('directorId', directorId)
   directorId.series.push(series._id);
  }
 }
//Değişiklikleri ilgili json dosyalarına yazma
 fs.writeFileSync('genres.json', JSON.stringify(genresPush));
 fs.writeFileSync('scriptwriters.json', JSON.stringify(sWritesPush));
 fs.writeFileSync('directors.json', JSON.stringify(directorsPush));
 fs.writeFileSync('stars.json', JSON.stringify(starsPush));
}
const animeParentSet = (animes, parentItem) => {
 //Json dosyalarını okuma
 const genresData = fs.readFileSync('genres.json')
 const sWritesData = fs.readFileSync('scriptwriters.json')
 const directorsData = fs.readFileSync('directors.json')
 const starsData = fs.readFileSync('stars.json')
//json dosyalarını parse etme
 const genresPush = JSON.parse(genresData)
 const sWritesPush = JSON.parse(sWritesData)
 const directorsPush = JSON.parse(directorsData)
 const starsPush = JSON.parse(starsData)

//filmelere atanan radom idlere göre ilgili alanlara film id ekleme
 for (let i = 0; i < parentItem.randomStarsIds.length; i++) {
  const element = parentItem.randomStarsIds[i];
  const stars = starsPush.find((g) => g._id === element);
  if (stars) {
   stars.anime.push(animes._id);
  }
 }

 for (let i = 0; i < parentItem.genresIds.length; i++) {
  const element = parentItem.genresIds[i];
  const genre = genresPush.find((g) => g._id === element);
  if (genre) {
   genre.anime.push(animes._id);
  }
 }

 for (let i = 0; i < parentItem.randomSwritesIds.length; i++) {
  const element = parentItem.randomSwritesIds[i];
  const scriptwriter = sWritesPush.find((g) => g._id === element);
  if (scriptwriter) {
   scriptwriter.anime.push(animes._id);
  }
 }

 for (let i = 0; i < parentItem.randomDirectorsIds.length; i++) {
  const element = parentItem.randomDirectorsIds[i];
  const directorId = directorsPush.find((g) => g._id === element);
  if (directorId) {
   console.log('directorId', directorId)
   directorId.anime.push(animes._id);
  }
 }
//Değişiklikleri ilgili json dosyalarına yazma
 fs.writeFileSync('genres.json', JSON.stringify(genresPush));
 fs.writeFileSync('scriptwriters.json', JSON.stringify(sWritesPush));
 fs.writeFileSync('directors.json', JSON.stringify(directorsPush));
 fs.writeFileSync('stars.json', JSON.stringify(starsPush));
}


const setMovies = async () => {
 //Json dosyalarını okuma
 const moviesData = fs.readFileSync('movies.json')
 const seriesData = fs.readFileSync('series.json')
 const animesData = fs.readFileSync('anime.json')

 //json dosyalarını parse etme
 const movies = JSON.parse(moviesData)
 const series = JSON.parse(seriesData)
 const animes = JSON.parse(animesData)

 //Kayıtlı film kadar döngü
 for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  // her seferrinde random parent id alma
  const parentItem = moviesParentGet()

//ilgili alanlara random id atama
  movie.genre = parentItem.genresIds
  movie.scriptwriter = parentItem.randomSwritesIds
  movie.directorId = parentItem.randomDirectorsIds
  movie.stars = parentItem.randomStarsIds
  moviesParentSet(movies[i], parentItem)
 }
 // Değişiklikleri ilgili json dosyasına yazma
 fs.writeFileSync('movies.json', JSON.stringify(movies));


 for (let i = 0; i < series.length; i++) {
  const serie = series[i];
  // her seferrinde random parent id alma
  const parentItem = moviesParentGet()

//ilgili alanlara random id atama
  serie.genre = parentItem.genresIds
  serie.scriptwriter = parentItem.randomSwritesIds
  serie.directorId = parentItem.randomDirectorsIds
  serie.stars = parentItem.randomStarsIds
  seriesParentSet(series[i], parentItem)
 }
 fs.writeFileSync('series.json', JSON.stringify(series))



 for (let i = 0; i < animes.length; i++) {
  const anime = animes[i];
  // her seferrinde random parent id alma
  const parentItem = moviesParentGet()

//ilgili alanlara random id atama
  anime.genre = parentItem.genresIds
  anime.scriptwriter = parentItem.randomSwritesIds
  anime.directorId = parentItem.randomDirectorsIds
  anime.stars = parentItem.randomStarsIds
  animeParentSet(animes[i], parentItem)
 }
 fs.writeFileSync('anime.json', JSON.stringify(animes))



}

setMovies()








