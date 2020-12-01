const express = require('./node_modules/express');
const array = [
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
const app = express();

app.get('/api/grades', (req, res) => {
  res.send(array);
});

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Server is listening to port 3000.');
});
