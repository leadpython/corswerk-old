const express = require('express');
const mongo = require('mongodb');
const app = express();
const database = require('./database.js');
const api = require('./routes/api.js');
const authentication = require('./routes/authentication.js');

const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';

// app.use(authentication);
// app.use('/api', api);

mongo.MongoClient.connect(uri, (error, db) => {
  if (error) { throw error; }
  // database.initialize(db);
  app.listen(port, (error) => {
    if (error) { throw error; }
    console.log(`App is now running on port ${port}.`);
  });
});