/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: 'Jenny',
  lastName: 'Tran',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'freelance graphic designer';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Toyota',
  model: 'Prius',
  year: 2015
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Ellie',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
