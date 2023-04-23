const multer = require('multer');
const helpers = require('../utils/helpers');
const mimeTypes = [
 'image/jpeg',
 'image/jpg',
 'image/png',
 'image/webp',
 'image/avif',
]

const storage = multer.diskStorage({
 destination: function (req, file, cb) {
  const destinations = {
   pp: './uploads/pp',
   poster: req.baseUrl === '/api/v1/series' ? './uploads/series/poster' :  req.baseUrl === '/api/v1/movies' ?  './uploads/movies/poster' : './uploads/anime/poster' ,
   bannerPoster: req.baseUrl === '/api/v1/series' ? './uploads/series/bannerPoster' :  req.baseUrl === '/api/v1/movies' ?  './uploads/movies/bannerPoster' : './uploads/anime/bannerPoster' ,
  };

  if (file.fieldname in destinations) {
   cb(null, destinations[file.fieldname]);
  } else {
   cb(null, './uploads');
  }
 },
 filename: function (req, file, cb) {
  const slugImageName = file.fieldname + '-' + helpers.replaceImageName(file.originalname);

  cb(null, slugImageName);
 }
});

const fileFilter = (req, file, cb) => {
 if (mimeTypes.includes(file.mimetype)) {
  cb(null, true);
  return true;
 } else {
  return cb(new Error('File type is not supported!'), false);
 }
}

const multipleUpload = multer({
 storage,
 fileFilter,
 limits: {fileSize: "5mb"}
}).fields([{name: 'poster', maxCount: 1}, {name: 'bannerPoster', maxCount: 1}])

const singleUpload = multer({
 storage,
 fileFilter,
 limits: {fileSize: "5mb"}
}).single('pp')


module.exports = {
 multipleUpload,
 singleUpload
};