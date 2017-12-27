const router = require('express').Router();

router.get('/lol', (request, response, next) => {
  if (true) {
    response.json("AUTHENTICATED!");
  }
  next();
});

module.exports = router;