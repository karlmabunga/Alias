const db = require('../database-mongo');

const selectAll = (callback) => {
  db.find({}, (err, words) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, words);
    }
  });
};
const postWords = (body, callback) => {
  db.create({ words: body }, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  selectAll,
  postWords,
};
