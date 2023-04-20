const multer = require('multer');
const helpers = require('../utils/helpers');

const upload = require('../middleware/imageupload.middleware');

exports.uploadImage = async (req, res) => {
 return new Promise((resolve, reject) => {
  upload(req, res, async (err) => {
   if (err instanceof multer.MulterError) {

    reject(err);
   } else if (err) {
    reject(err);
   }
   const ip = await helpers.getHost(req);
   const filePath = process.env.FILE_PATH;
   const poster = await req.files?.['poster']?.[0].filename;
   const bannerPoster = await req.files?.['bannerPoster']?.[0].filename;
   const fileUrls = [!!poster && `${ip}${filePath}${poster}`, !!bannerPoster && `${ip}${filePath}${bannerPoster}`];
   resolve(fileUrls);
  })
 })
}

