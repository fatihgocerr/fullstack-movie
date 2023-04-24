const multer = require('multer');
const helpers = require('../utils/helpers');

const upload = require('../middleware/imageupload.middleware');

exports.uploadMultipleImage = async (req, res) => {
 return new Promise((resolve, reject) => {
  upload.multipleUpload(req, res, async (err) => {
   if (err instanceof multer.MulterError) {

    reject(err);
   } else if (err) {
    reject(err);
   }
   const ip = await helpers.getHost(req);
   const filePath =await (process.env.FILE_PATH+req.baseUrl.split('/v1/')[1]);
   const poster = await req.files?.['poster']?.[0].filename;
   const bannerPoster = await req.files?.['bannerPoster']?.[0].filename;
   // console.log(`${poster.split('-')[0]}`)
   const fileUrls = [!!poster && `${ip}${filePath}/${poster.split('-')[0]}/${poster}`, !!bannerPoster && `${ip}${filePath}/${bannerPoster.split('-')[0]}/${bannerPoster}`];
   resolve(fileUrls);
  })
 })
}

exports.uploadSingleImage = async (req, res) => {
 return new Promise((resolve, reject) => {
  upload.singleUpload(req, res, async (err) => {
   if (err instanceof multer.MulterError) {
    reject(err);
   } else if (err) {
    reject(err);
   }
   const ip = await helpers.getHost(req);
   const filePath = process.env.FILE_PATH;
   const pp = req.file.filename
   const fileUrl =`${ip}${filePath}${pp}`;
   resolve(fileUrl);
  })
 })
}

