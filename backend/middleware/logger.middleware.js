const logger = require('../utils/logger');
const helpers = require('../utils/helpers');


module.exports = (req, res, next) => {
 if (req.url.includes('auth/signIn') || req.url.includes('auth/createUser')) {
  logger.info(`
  IP ADRESİ : ${req.ip} -
 PATH : ${req.path} -
 METHOD : ${req.method} -
 BODY : Inaccessible -
 PARAMS : ${JSON.stringify(req.params)} -
 QUERY : ${JSON.stringify(req.query)} -
 URL : ${req.url} -
 MIDDLEWARE ACCESS TIME : ${Date.now()}
 `)
  next();
 }
 else {
  logger.info(`
  IP ADRESİ : ${req.ip} -
 PATH : ${req.path} -
 METHOD : ${req.method} -
 BODY : ${JSON.stringify(req.body)} -
 PARAMS : ${JSON.stringify(req.params)} -
 QUERY : ${JSON.stringify(req.query)} -
 URL : ${req.url} -
 MIDDLEWARE ACCESS TIME : ${Date.now()}
 `)
  next();
 }
}