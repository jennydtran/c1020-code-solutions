/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const name = takeAChance('Jenny');

name.then(resolve => {
  console.log(resolve);
}, reject => {
  console.log(reject.message);
});
