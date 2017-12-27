const express = require('express');
const mongo = require('mongodb');
const app = express();
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const database = require('./api/database.js');
const api = require('./api/api.js');
const authentication = require('./api/authentication.js');

const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/corswerk-database';

// Passport + Auth0
var strategy = new Auth0Strategy({
   domain:       'corswerk.auth0.com',
   clientID:     'GQVtyBasTJNUsjbd20WQjS75alVkMlrd',
   clientSecret: '9Dm-pfkQ_4YMCJj7f46Rw-ar8L8zfAfPggNbptoXh8MarisyaeOhTCuxS_lo17x6',
   callbackURL:  '/callback'
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);

app.use('/api', authentication);
app.use('/api', api);

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});


mongo.MongoClient.connect(uri, function(error, db) {
  if (error) { throw error; }
  database.initialize(db);
  app.listen(port, function (error) {
    if (error) { throw error; }
    console.log(`App is now running on port ${port}.`);
  });
});