const fs = require('fs');
const fileToCopyFrom = process.argv[2];
const fileToCopyTo = process.argv[3];

fs.readFile(fileToCopyFrom, 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFile(fileToCopyTo, data, 'utf8', err => {
    if (err) throw err;
  });
});
