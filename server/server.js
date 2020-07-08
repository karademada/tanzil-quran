require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const createError = require('http-errors');
const cors = require('cors');

const quranRouter = require('./app/routes/quran.routes');
const db = require('./app/models');

const app = express();

const corsOptions = {
  origin: `http://localhost:${process.env.PORT}`
};

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.authenticate().then(
  () => {
    console.log('Connection has been established successfully.');
  },
  (err) => {
    console.log('Unable to connect to the database:', err);
  }
);

app.use('/quran', quranRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on http://localhost:${port}`));

module.exports = app;
