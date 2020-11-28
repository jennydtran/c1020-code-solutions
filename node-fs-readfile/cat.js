/* eslint-disable no-console */
const fs = require('fs');
const i = 2;

const readFiles = function (i) {
  if (i !== process.argv.length) {
    fs.readFile(process.argv[i], 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        readFiles(i + 1);
      }
    });
  }
};
readFiles(i);
