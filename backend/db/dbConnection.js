const mongoose = require('mongoose');
const logger = require( '../utils/logger');


//local mongoDb connection

// exports.connectToMongoDb = async (host,port,collection,minPoolSize,maxPoolSize,connectTimeoutMs) => {
//  try {
//   await mongoose.connect(`mongodb://${host}:${port}/${collection}`, {
//    compressors: 'zlib',
//    autoIndex: true,
//    minPoolSize: minPoolSize,
//    maxPoolSize: maxPoolSize,
//    connectTimeoutMS: connectTimeoutMs,
//   })
//   logger.info('connected to mongoDb');
//  } catch (error) {
//   logger.error('error connection to mongoDb');
//   throw new Error(error)
//  }
// }

//global mongoDb connection

exports.connectToMongoDb = async (host,port,collection,minPoolSize,maxPoolSize,connectTimeoutMs) => {
 try {
  await mongoose.connect(process.env.MONGODB_URI, {
   compressors: 'zlib',
   autoIndex: true,
   minPoolSize: minPoolSize,
   maxPoolSize: maxPoolSize,
   connectTimeoutMS: connectTimeoutMs,
  })
  logger.info('connected to mongoDb');
 } catch (error) {
  logger.error('error connection to mongoDb');
 throw new Error(error)
 }
}