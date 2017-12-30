const _ = require('./service.js');
// const database = require('../../database.js').connect();
const data = [];
var counter = 0;

module.exports = (router) => {

  // CREATE STUDENT - used when user signs up
  router.get('/create-student', (request, response) => {
    data.push(_.createStudent(request.body));
    response.json(data);
  });

  
}

