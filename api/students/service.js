module.exports = {
  createStudent(data) {
    var student = {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email
    };
    return student;
  }
};