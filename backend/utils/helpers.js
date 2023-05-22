const jwt = require('jsonwebtoken');
const dns = require('dns');
const fs = require('fs');
const os = require('os');
const bcrypt = require('bcrypt');
const logger = require('./logger');
const {validationResult} = require('express-validator');
const {StatusCodes} = require('http-status-codes');
const crypto = require('crypto');

const {createTransport} = require("nodemailer");

const logToError = (error, req, message) => {
 logger.error(`
  IP ADRESİ : ${req.ip} -
 PATH : ${req.path} -
 METHOD : ${req.method} -
 BODY : ${JSON.stringify(req.body)} -
 PARAMS : ${JSON.stringify(req.params)} -
 QUERY : ${JSON.stringify(req.query)} -
 URL : ${req.url} -
 ERROR MESSAGE : ${error.message} - 
 ERROR CALLSTACK : ${JSON.stringify(error)} -
 ERROR TIME : ${Date.now()} -
 CUSTOM MESSAGE : ${message}
 `)
}

const handleValidationErrors = (req) => {
 const validationErrors = validationResult(req);
 if (!validationErrors.isEmpty()) {
  return {
   message: 'Geçersiz Veri',
   success: false,
   error: true,
   validationErrors: validationErrors.array(),
   timestamp: Date.now(),
   code: StatusCodes.BAD_REQUEST
  }
 }
 return null;
}

const generateToken = (userId, userName, role) => {
 const token = jwt.sign({
   userId,
   userName,
   role
  }, process.env.JWT_SECRET,
  {expiresIn: process.env.JWT_EXPIRES_IN});
 return token;
}

const decodeToken = (token) => {
 const isVerify = {decodeToken: null}
 try {
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  isVerify.decodeToken = decodedToken;
  console.log('decodedToken', decodedToken)
  return isVerify;
 } catch (error) {
  throw new Error(error)
  return isVerify;
 }
}

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
  console.log('data',data._id)
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

const findedSeriesDataPush = async (data, dal, id) => {
 await Promise.all(data.map(async (value) => {
  const findedData = await dal.getById(value);
  if (findedData.series.includes(id)) return;
  findedData.series.push(id);
  // findedData.series = findedData.series.filter((_id) => _id !== id);
  await dal.create(findedData);
 }));
}
const deleteSeriesDatafilter = async (data, dal, id) => {
 for (const value of data) {
  const findData = await dal.getById(value);

  const newData = findData.series.filter((val) => val.toString() !== id.toString());
  await dal.updateById(value, {series: newData})
 }
}

const findedAnimeDataPush = async (data, dal, id) => {
 await Promise.all(data.map(async (value) => {
  const findedData = await dal.getById(value);
  findedData.anime.push(id);
  await dal.create(findedData);
 }));
}
const deleteAnimeDatafilter = async (data, dal, id) => {
 for (const value of data) {
  const findData = await dal.getById(value);
  const newData = findData.anime.filter((val) => val.toString() !== id.toString());
  await dal.updateById(value, {anime: newData})
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
  const subdirs = ['series/poster', 'movies/poster', 'series/bannerPoster', 'movies/bannerPoster','anime/poster', 'anime/bannerPoster'];
  fs.mkdirSync(dir, {recursive: true});
  fs.mkdirSync(`${dir}/pp`, {recursive: true});

  for (const subdir of subdirs) {
   fs.mkdirSync(`${dir}/${subdir}`, { recursive: true });
  }
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
 console.log('image',image)
 console.log('data',`${image.split('-')[0]}/${image.split('/')[1]}`)
 // if (image && fs.existsSync(`uploads/${image.split('-')[0]}/${image.split('/')[1]}`)) {
 //  fs.unlink(`uploads/${image.split('-')[0]}/${image.split('/')[1]}`, (err) => {
 //   console.log('err', err)
 //   return !err;
 //  });
 // }
 if (image && fs.existsSync(`uploads/${image}`)) {
  fs.unlink(`uploads/${image}`, (err) => {
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


const randomArray =async (max, min, length = 3) => {
 const arr = [];
 for(let i = 0; i <  length; i++){
  const random =Math.floor( Math.random() * (max - min) + min);
  // random < 2 ? arr.push(random+2) : arr.push(random)
  arr.push(random)
 }
 console.log(arr)
 const total = arr.reduce((a,b) => a+b)
 console.log(total)
 console.log(total/ arr.length)
 return await arr
}


const mailVerifyToken = async () => {
 return await crypto.randomBytes(32).toString('hex');
}
const sendMail = async (email, subject , verifyToken,user,timestamp) => {


 const transporter = createTransport({
  service: 'gmail',
  auth: {
   user: process.env.EMAIL,
   pass: process.env.EMAIL_PASSWORD
  }
 });

 const mailOptions = {
  from: process.env.EMAIL,
  to: email,
  subject: subject,
  html: `<html>
      <head>
        <style>
          body {
            background-color: #334155;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          h1, p {
            color: #008080;
            text-align: center;
          }
          a {
          font: bold 14px Arial;
          }
        </style>
      </head>
      <body>
        <h1>Hesap Onayı</h1>
        <p>Hesabınızı Onaylamak İçin Aşağıdaki Linke Tıklayın: 
<!--        <a href="https://projectarea.online/confirm?token=${verifyToken}&user=${user}&timestamp=${timestamp}">Onay Linki</a>-->
        <a href="https://projectarea.online/api/v1/users/confirm?token=${verifyToken}&user=${user}&timestamp=${timestamp}">Onay Linki</a>
        </p>
      </body>
    </html>`
 };

 await transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
   console.log(err);
  } else {
   console.log('Email sent: ' + info.response);
  }
 });
}


// sendMail().then(r => console.log(r)).catch(e => console.log(e))


module.exports = {
 logToError,
 handleValidationErrors,
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
 decryptPassword,
 findedSeriesDataPush,
 deleteSeriesDatafilter,
 findedAnimeDataPush,
 deleteAnimeDatafilter,
 randomArray,
 generateToken,
 decodeToken,
 mailVerifyToken,
 sendMail
}