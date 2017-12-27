var _database;

module.exports = {
  initialize(database) {
    _database = database;
  },
  connect() {
    return _database;
  }
}