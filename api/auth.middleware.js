const router = require('express').Router();

function checkAuthentication(request, response, next) {
  next();
}

module.exports = router;