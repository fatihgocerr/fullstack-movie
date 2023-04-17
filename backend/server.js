const express = require('express');
const cors = require('cors');
const {default:helmet} = require('helmet');
const db = require('./db');
const configs = require('./config');
const app = express();
const router = require('./routers');
configs.serverConfig.initialServerConfig();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(`${process.env.APP_PREFIX}/movies`, router.movieRouter);


//mongoose connection and server start
db.dbConnection.connectToMongoDb(
 '127.0.0.1',
 process.env.MONGODB_PORT,
 process.env.MONGODB_COLLECTION,
 process.env.MONGODB_MIN_POOL_SIZE,
 process.env.MONGODB_MAX_POOL_SIZE,
 process.env.MONGODB_CONNECTION_TIMEOUT
).then(() => {
 console.log('Running Mongoose Collection')
 app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
 });
})

