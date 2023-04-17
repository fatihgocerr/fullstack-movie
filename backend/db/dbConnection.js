const mongoose = require('mongoose');
//import logger from

exports.connectToMongoDb = async (host,port,collection,minPoolSize,maxPoolSize,connectTimeoutMs) => {
 try {
  await mongoose.connect(`mongodb://${host}:${port}/${collection}`, {
   compressors: 'zlib',
   autoIndex: true,
   minPoolSize: minPoolSize,
   maxPoolSize: maxPoolSize,
   connectTimeoutMS: connectTimeoutMs,
  })
  //Add to logger.info connect to mongoDb
 } catch (error) {
  //add to logger.error error connection to mongoDb
  throw new Error(error)
 }
}