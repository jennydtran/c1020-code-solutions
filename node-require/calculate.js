/* eslint-disable no-console */
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[4]);

if (process.argv[3].match('plus')) {
  console.log('result:', add(x, y));
} else if (process.argv[3].match('minus')) {
  console.log('result:', subtract(x, y));
} else if (process.argv[3].match('times')) {
  console.log('result:', multiply(x, y));
} else if (process.argv[3].match('over')) {
  console.log('result:', divide(x, y));
}
