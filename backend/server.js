const express = require('express');
const cors = require('cors');
const {default:helmet} = require('helmet');
const db = require('./db');
const configs = require('./config');
const app = express();
const router = require('./routers');
const helpers = require('./utils/helpers');
const middleware = require('./middleware');

configs.serverConfig.initialServerConfig();
helpers.uploadsDirControl('./uploads');
app.use('/uploads', express.static('uploads')); //dışarıdan erişim için

app.use(cors());
app.use(helmet());
app.use(express.json());


app.use(middleware.loggerMiddleware);

app.get('/', (req, res) => {
 res.sendFile(__dirname + '/index.page.html' );
})


app.use(`${process.env.APP_PREFIX}/movies`, router.movieRouter);
app.use(`${process.env.APP_PREFIX}/series`, router.seriesRouter);
app.use(`${process.env.APP_PREFIX}/anime`, router.animeRouter);
app.use(`${process.env.APP_PREFIX}/directors`, router.directorRouter);
app.use(`${process.env.APP_PREFIX}/stars`, router.starRouter);
app.use(`${process.env.APP_PREFIX}/scriptwriters`, router.scriptwriterRouter);
app.use(`${process.env.APP_PREFIX}/genres`, router.genreRouter);
app.use(`${process.env.APP_PREFIX}/comments`, router.commentRouter);
app.use(`${process.env.APP_PREFIX}/users`, router.userRouter);
app.use(`${process.env.APP_PREFIX}/statistics`, router.statisticsRouter);
app.use(`${process.env.APP_PREFIX}/search`, router.searchRouter);

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

