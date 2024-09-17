const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./src/routes');
const respondWithError = require('./src/utils/respond').withError;

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use('/', indexRouter);

// Global Erros Handler
app.use((err, req, res, next) => {
  console.log('====================================');
  console.log('Error', err);
  console.log('====================================');
  return respondWithError(res, err);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
