const winston = require('winston')
const dailyRotateFile = require('winston-daily-rotate-file')
const {level} = require('winston')
const {timestamp, json, prettyPrint, colorize, label, combine } = winston.format




const logConfig = {
 defaultMeta:{
  api: 'Node Server',
 },
 level:'verbose',
 transports : [
  new dailyRotateFile({
   datePattern:'DD-MM-YYYY',
   filename: 'logs/%DATE%.log',
   dirname:'./logs/'
  })
 ],
 format: combine(
  label({ label: 'Library Project' }),
  timestamp(),
  prettyPrint(),
  json(),
  colorize()
 )
}
winston.addColors({
 error:'red',
 warn:'yellow',
 info:'green',
 verbose:'blue',
 debug:'magenta',
 silly:'cyan'
})


module.exports = logConfig;







