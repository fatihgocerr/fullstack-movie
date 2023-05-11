const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
// Load env vars
dotenv.config({ path: '../.env' });

// Load models
const Directors = require('../models/director.model');
const Scriptwriters = require('../models/scriptwriter.model');
const Stars = require('../models/star.model');
const Genres = require('../models/genre.model');
const Users = require('../models/user.model');
const Movies = require('../models/movie.model');
const Series = require('../models/series.model');
const Anime = require('../models/anime.model');
const db = require("../db");

// Connect to DB
// mongoose.connect(process.env.MONGODB_URI, {
//    compressors: 'zlib',
//    // autoIndex: true,
//  useNewUrlParser: true,
//  useUnifiedTopology: true
//   }).then(() => console.log('MongoDB Connected...'.cyan.underline.bold)).catch(err => console.log(err));
// Local DB connection
const connectToMongoDb = async (host,port,collection,minPoolSize,maxPoolSize,connectTimeoutMs) => {
 try {
  await mongoose.connect(`mongodb://${host}:${port}/${collection}`, {
   compressors: 'zlib',
   autoIndex: true,
   minPoolSize: minPoolSize,
   maxPoolSize: maxPoolSize,
   connectTimeoutMS: connectTimeoutMs,
  })
   .then(() => console.log('MongoDB Connected...'.cyan.underline.bold))
   .catch(err => console.log(err.red));
 } catch (error) {

  throw new Error(error)
 }
}



// Read JSON files
const directors = JSON.parse(
 fs.readFileSync(`${__dirname}/directors.json`, 'utf-8')
);

const scriptwriters = JSON.parse(
 fs.readFileSync(`${__dirname}/scriptwriters.json`, 'utf-8')
);

const stars = JSON.parse(
 fs.readFileSync(`${__dirname}/stars.json`, 'utf-8')
);

const genres = JSON.parse(
 fs.readFileSync(`${__dirname}/genres.json`, 'utf-8')
);

const movies = JSON.parse(
 fs.readFileSync(`${__dirname}/movies.json`, 'utf-8')
);

const series = JSON.parse(
 fs.readFileSync(`${__dirname}/series.json`, 'utf-8')
);

const anime = JSON.parse(
 fs.readFileSync(`${__dirname}/anime.json`, 'utf-8')
);

const users = JSON.parse(
 fs.readFileSync(`${__dirname}/users.json`, 'utf-8')
);


// Import into DB
const importData = async () => {
 console.log('importData')
 try {
  await Directors.create(directors);
  await Scriptwriters.create(scriptwriters);
  await Stars.create(stars);
  await Genres.create(genres);
  await Movies.create(movies);
  await Series.create(series);
  await Anime.create(anime);
  await Users.create(users);

  console.log('Data Imported...'.green.inverse);
  process.exit();
 } catch (err) {
  console.error(err);
 }
};

// Delete data
// const deleteData = async () => {
//  try {
//   await Bootcamp.deleteMany();
//   await Course.deleteMany();
//   await User.deleteMany();
//   await Review.deleteMany();
//   console.log('Data Destroyed...'.red.inverse);
//   process.exit();
//  } catch (err) {
//   console.error(err);
//  }
// };

// if (process.argv[2] === '-i') {
//  importData();
//
// }
// else if (process.argv[2] === '-d') {
//  deleteData();
// }


//local mongoDb connection
connectToMongoDb(
 process.env.MONGODB_HOST,
 process.env.MONGODB_PORT,
 process.env.MONGODB_COLLECTION,
 process.env.MONGODB_MIN_POOL_SIZE,
 process.env.MONGODB_MAX_POOL_SIZE,
 process.env.MONGODB_CONNECTION_TIMEOUT
).then(() => {
 console.log('MongoDB Connected...'.cyan.underline.bold)
 importData();
 })
