const express = require('./node_modules/express');
const app = express();

const grades = [];
let nextID = 1;

const parser = express.json();

app.use(parser);

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', parser, (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextID;
  grades.push(newGrade);
  nextID++;
  res.json(newGrade);
  res.status(201);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
