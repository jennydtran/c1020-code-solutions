/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
/* eslint-disable no-console, no-unused-vars */

// ---- isUnderFive
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
console.log('isUnderFive(4):', isUnderFive(4));
console.log('isUnderFive(10):', isUnderFive(10));
console.log('isUnderFive(5):', isUnderFive(5));

// ---- isEven
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log('isEven(4):', isEven(4));
console.log('isEven(10):', isEven(10));
console.log('isEven(5):', isEven(5));

// ---- startsWithJ
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
console.log("startsWithJ('JavaScript'):", startsWithJ('JavaScript'));
console.log("startsWithJ('PHP'):", startsWithJ('PHP'));
console.log("startsWithJ('HTML'):", startsWithJ('HTML'));
console.log("startsWithJ('JAVA'):", startsWithJ('JAVA'));
console.log("startsWithJ('Kotlin'):", startsWithJ('Kotlin'));
console.log("startsWithJ('C#'):", startsWithJ('C#'));

// ---- isOldEnoughToDrink
function isOldEnoughToDrink(person) {
  var legal = person.age;
  if (person.age >= 21) {
    legal = true;
  } else {
    legal = false;
  }
  return legal;
}
var bart = { name: 'Bartholomew JoJo Simpson', age: 10 };
console.log('isOldEnoughToDrink(bart):', isOldEnoughToDrink(bart));

// ---- isOldEnoughToDrive
function isOldEnoughToDrive(person) {
  var legal = person.age;
  if (person.age >= 16) {
    legal = true;
  } else {
    legal = false;
  }
  return legal;
}
var homer = { name: 'Homer Jay Simpson', age: 39 };
console.log('isOldEnoughToDrive(homer):', isOldEnoughToDrive(homer));

// ---- isOldEnoughToDrinkAndDrive
function isOldEnoughToDrinkAndDrive(person) {
  var legal = person.age;
  if (person.age >= 21 && person.age >= 16) {
    legal = false;
  } else {
    legal = false;
  }
  return legal;
}
console.log('isOldEnoughToDrinkAndDrive(homer):', isOldEnoughToDrinkAndDrive(homer));

// ---- categorizeAcidity
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
console.log('categorizeAcidity(-1):', categorizeAcidity(-1));
console.log('categorizeAcidity(14.0000001):', categorizeAcidity(14.0000001));
console.log('categorizeAcidity(7):', categorizeAcidity(7));
console.log('categorizeAcidity(2):', categorizeAcidity(2));
console.log('categorizeAcidity(9):', categorizeAcidity(9));

// ---- introduceWarnerBro
function introduceWarnerBro(name) {
  var greeting;
  if (name === 'yakko' || name === 'wakko') {
    greeting = "We're the warner brothers!";
  } else if (name === 'cody' || name === 'minerva') {
    greeting = 'Goodnight everybody!';
  } else if (name === 'dot') {
    greeting = "I'm cute~";
  }
  return greeting;
}
console.log("introduceWarnerBro('yakko'):", introduceWarnerBro('yakko'));
console.log("introduceWarnerBro('wakko'):", introduceWarnerBro('wakko'));
console.log("introduceWarnerBro('dot'):", introduceWarnerBro('dot'));
console.log("introduceWarnerBro('cody'):", introduceWarnerBro('cody'));
console.log("introduceWarnerBro('minerva'):", introduceWarnerBro('minerva'));
