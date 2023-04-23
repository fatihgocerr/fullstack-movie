
const dns = require('dns');
const fs = require('fs');
const os = require('os');
const bcrypt = require('bcrypt');

const jsonMovieChange = async (json,score) => {
 console.log('hlepers',score)
 const  jsonChange  = {
  id: json._id,
  name: json.name,
  genre: json.genre,
  visionDate: json.visionDate,
  imdbScore: json.imdbScore,
  directorId: json.directorId,
  stars: json.stars,
  scriptwriter: json.scriptwriter,
  userScore: score ? score.average : json.userScore,
  totalVotes: score ? score.totalVotes : json.totalVotes,
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

// findedDataMap ile gelen id'lere göre mongoDB'den verileri çekip return ediyoruz.
const findedDataMap =async (id, dal,) => {
 const arr = (await Promise.all(id.toString().split(',').map(async (value) => {
  const data = await dal.getById(value);
  return data._id;
 }))).filter(Boolean);
 return arr;
}
//findedDataPush ile kayıt esnasında gelen id'lerin movies kısmına kayıt edilen id'yi ekliyoruz. örn: ilgili oyuncunun filmler kısmına kayıt edilen film ekleniyor
const findedDataPush = async (data, dal, id) => {
 await Promise.all(data.map(async (value) => {
  const findedData = await dal.getById(value);
  findedData.movies.push(id);
  await dal.create(findedData);
 }));
}

//deleteDatafilter ile silme işlemi yapılırken ilgili id'yi movies kısmından çıkartıyoruz.
const deleteDatafilter = async (data, dal, id) => {

 for (const value of data) {
  const findData = await dal.getById(value);
  const newData = findData.movies.filter((val) => val.toString() !== id.toString());
  await dal.updateById(value, {movies: newData})
 }
}

const findedUserFriend =async (id, dal,) => {
 const arr = (await Promise.all(id.toString().split(',').map(async (value) => {
  const data = await dal.getById(value);
  return data;
 }))).filter(Boolean);
 return arr;
}

const deleteUserFriendFilter = async (data, dal, id) => {

 for (const value of data) {
  const findData = await dal.getById(value);
  const newData = findData.friends.filter((val) => val.toString() !== id.toString());
  await dal.updateUserById(value, {friends: newData})
 }
}

const uploadsDirControl = async (dir) => {
 if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, {recursive: true});
  fs.mkdirSync(`${dir}/pp`, {recursive: true});
  fs.mkdirSync(`${dir}/poster`, {recursive: true});
  fs.mkdirSync(`${dir}/bannerPoster`, {recursive: true});
 }
}
const getHost = (req) => {
 return new Promise((resolve) => {
  dns.lookup(os.hostname(),{family:4}, (err,ip) => {
   resolve(`${process.env.PROTOCOL}://${ip}:${process.env.PORT}`)
  })
 })
}
const deleteImageFromDisk = (image) => {

 if (image && fs.existsSync(`uploads/${image.split('-')[0]}/${image}`)) {
  fs.unlink(`uploads/${image.split('-')[0]}/${image}`, (err) => {
   console.log('err', err)
   return !err;
  });
 }
}


replaceImageName = (val) => {
 const trChars = (val) => {
  const letters = {
   'ğ': 'g',
   'ü': 'u',
   'ş': 's',
   'ı': 'i',
   'ö': 'o',
   'ç': 'c',
   'Ğ': 'G',
   'Ü': 'U',
   'Ş': 'S',
   'İ': 'I',
   'Ö': 'O',
   'Ç': 'C',
  };

  val = val.replace(/[ğüşıöçĞÜŞİÖÇ]/gu, letter => letters[letter]);

  const uniqueSuffix = Date.now();
  const values = uniqueSuffix + "-" + val.toLowerCase().replace(/\s+/g, '-');

  return values;
 };
 return trChars(val);
}

const encryptPassword = async (password) => {
 return await bcrypt.hash(password, 10);
}

const decryptPassword = async (password, hash) => {
 return await bcrypt.compare(password, hash);
}


module.exports = {
 jsonMovieChange,
 jsonDirectorChange,
 jsonStarChange,
 jsonScriptwriterChange,
 jsonGenreChange,
 findedDataMap,
 findedDataPush,
 getHost,
 uploadsDirControl,
 deleteImageFromDisk,
 deleteDatafilter,
 replaceImageName,
 findedUserFriend,
 deleteUserFriendFilter,
 encryptPassword,
 decryptPassword
}