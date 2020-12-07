/* eslint-disable no-unused-vars, no-console */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log('evenNumbers:', evenNumbers);

const overFive = numbers.filter(x => x > 5);
console.log('overFive:', overFive);

const startWithE = names.filter(index => index.startsWith('E'));
console.log(startWithE);

const haveD = names.filter(index => index.includes('D') || index.includes('d'));
console.log(haveD);
