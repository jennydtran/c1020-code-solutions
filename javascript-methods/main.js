var numberOne = 26;
var numberTwo = 45;
var numberThree = 13;

var maximumValue = Math.max(numberOne, numberTwo, numberThree);
console.log('maxiumuValue:', maximumValue);

var heroes = ['Thor', 'Iron Man', 'Black Widow', 'Spiderman'];
var randomNumber = Math.random(heroes);
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [{ title: 'The Alchemist', author: 'Paulo Coelho' }, { title: 'Steal Like an Artist', author: 'Austin Kleon' }, { title: 'Alice in Wonderland', author: 'Lewis Carroll' }];
var lastBook = library.pop();

console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = { title: 'JavaScript for Impatient Programmers', author: 'Dr. Axel Rauschmayer' };
var css = { title: 'CSS Secrets', author: 'Lea Verou' };

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Jenny Tran';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
