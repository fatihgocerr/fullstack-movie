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
  cb(null, './uploads');
 },
 filename: function (req, file, cb) {
  const slugImageName = file.fieldname +'-'+ helpers.replaceImageName(file.originalname);
  // const randomName = `${Date.now()}_${file.fieldname}_${file.originalname}`;
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

const upload = multer({
 storage,
 fileFilter,
 limits: { fileSize: "5mb" }
}).fields([{ name: 'poster',maxCount:1 }, { name: 'bannerPoster',maxCount:1 }])

module.exports = upload;