const router = require('express').Router();
const studentAPI = require('./students/student.api.js');

studentAPI(router);

module.exports = router;