const express = require('express');
const cors = require('cors');
const {default:helmet} = require('helmet');
const db = require('./db');
const configs = require('./config');
const app = express();
const router = require('./routers');
const helpers = require('./utils/helpers');

configs.serverConfig.initialServerConfig();
helpers.uploadsDirControl('./uploads');
app.use('/uploads', express.static('uploads')); //dışarıdan erişim için

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(`${process.env.APP_PREFIX}/movies`, router.movieRouter);
app.use(`${process.env.APP_PREFIX}/directors`, router.directorRouter);
app.use(`${process.env.APP_PREFIX}/stars`, router.starRouter);
app.use(`${process.env.APP_PREFIX}/scriptwriters`, router.scriptwriterRouter);
app.use(`${process.env.APP_PREFIX}/genres`, router.genreRouter);
app.use(`${process.env.APP_PREFIX}/comments`, router.commentRouter);
app.use(`${process.env.APP_PREFIX}/users`, router.userRouter);

//mongoose connection and server start
db.dbConnection.connectToMongoDb(
 process.env.MONGODB_HOST,
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

