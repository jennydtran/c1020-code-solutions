const fs = require('fs');
const getRandom = () => Math.random() + '\n';

fs.writeFile('random.txt', getRandom(), 'utf8', err => {
  if (err) throw err;
});
