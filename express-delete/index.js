const express = require('./node_modules/express');
const app = express();
const grades = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'Big Chungus',
    course: 'Meming',
    grade: 9002
  }
];

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.delete('/api/grades/:id', (req, res) => {
  for (var i = 0; i < grades.length; i++) {
    if (grades[i].id === JSON.parse(req.params.id)) {
      grades.splice(i, 1);
    }
  }
  res.sendStatus(204);
});

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
