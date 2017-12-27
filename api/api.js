const router = require('express').Router();

router.get('/lol', (request, response) => {
  response.json("HELLO WORLD!");
});

module.exports = router;