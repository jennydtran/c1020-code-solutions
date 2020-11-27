/* eslint-disable no-console */
const fs = require('fs');

for (var i = 2; i < process.argv.length; i++) {
  fs.readFile(process.argv[i], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
