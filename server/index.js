const express = require('express');
const bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const items = require('../database-mysql');
const db = require('../database-mongo');
const controller = require('./controller');

const app = express();

// UNCOMMENT FOR REACT
app.use(express.static(`${__dirname}/../react-client/dist`));
app.use(bodyParser.json());

app.get('/words', controller.getWords);

app.post('/words', controller.postWords);

// app.get('/words', (req, res) => {
//   db.selectAll((err, data) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       const allWords = data[0].words[0].words;
//       res.json(allWords);
//     }
//   });
// });

// app.post('/words', (req, res) => {
//   const { body } = req;
//   db.postWords(body, (err, data) => {
//     if (err) {
//       res.status(500);
//     } else {
//       res.status(200).send('Successful post');
//     }
//   });
// });

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
