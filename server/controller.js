const model = require('./model');

const getWords = (req, res) => {
  model.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const allWords = data[0].words[0].words;
      res.json(allWords);
    }
  });
};

const postWords = (req, res) => {
  const { body } = req;
  model.postWords(body, (err, data) => {
    if (err) {
      res.status(500);
    } else {
      res.status(200).send('Successful post: ', data);
    }
  });
};

module.exports = {
  getWords,
  postWords,
};
