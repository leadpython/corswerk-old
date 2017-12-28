// DEPENDENCIES
const express = require('express');
const mongo = require('mongodb');
const app = express();
const bodyParser = require("body-parser");
const database = require('./database.js');
const path = require('path');
const api = require('./api/api.js');
const authMiddleware = require('./api/auth.middleware.js');

// SET PORTS AND DB URI
const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';

// SET STATIC PATHS FOR STATIC ASSETS
app.use('/static', express.static(path.join(__dirname, 'client/dist/static/')))

// API & MIDDLEWARE
app.use(bodyParser.json());
app.use('/api', authMiddleware);
app.use('/api', api);

// SERVE MAIN HTML FILE
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/client/dist/index.html');
});

// RUN MONGODB
mongo.MongoClient.connect(uri, (error, db) => {
  if (error) { throw error; }

  // Initialize database
  database.initialize(db);

  // Run server
  app.listen(port, (error) => {
    if (error) { throw error; }
    console.log(`App is now running on port ${port}.`);
  });
});