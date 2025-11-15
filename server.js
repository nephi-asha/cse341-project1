const express = require('express');
const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const cors = require("cors");
const professionalRoutes = require('./routes/user');

const port = process.env.PORT || 8080;
const app = express();

app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/', require('./routes'));

// app
//   .use(bodyParser.json())
//   .use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//   })
//   .use('/contacts', professionalRoutes);

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});