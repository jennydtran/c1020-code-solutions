const fs = require('fs');
const userInput = () => process.argv[2] + '\n';

fs.writeFile('note.txt', userInput(), 'utf8', err => {
  if (err) throw err;
});
