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
  if (file.fieldname === 'pp') {
   cb(null, './uploads/pp');
   return
  } else if (file.fieldname === 'poster') {
   cb(null, './uploads/poster');
   return
  } else if (file.fieldname === 'bannerPoster') {
   cb(null, './uploads/bannerPoster');
   return
  }
  cb(null, './uploads');
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