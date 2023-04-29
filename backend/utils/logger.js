const winston = require('winston');

const logConfig = require('../config/index');
const logger = winston.createLogger(logConfig.logConfig);

module.exports = logger;