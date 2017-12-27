const router = require('express').Router();
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');

// Passport + Auth0
const strategy = new Auth0Strategy({
  domain:       'corswerk.auth0.com',
  clientID:     'GQVtyBasTJNUsjbd20WQjS75alVkMlrd',
  clientSecret: '9Dm-pfkQ_4YMCJj7f46Rw-ar8L8zfAfPggNbptoXh8MarisyaeOhTCuxS_lo17x6',
  callbackURL:  '/callback'
 },
 (accessToken, refreshToken, extraParams, profile, done) => {
   // accessToken is the token to call Auth0 API (not needed in the most cases)
   // extraParams.id_token has the JSON Web Token
   // profile has all the information from the user
   return done(null, profile);
 }
);

passport.use(strategy);

router.get('/', (request, response) => {
  response.sendFile(__dirname + '../index.html');
});

router.get('/callback', passport.authenticate('auth0', { failureRedirect: '/login' }), (request, response) => {
  if (!request.user) {
    throw new Error('User NULL');
  }
  response.redirect('/');
});

router.get('/login', passport.authenticate('auth0', {}), (request, response) => {
  response.redirect('/');
});

module.exports = router;