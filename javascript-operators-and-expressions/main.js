/* eslint-disable no-console */
var width = 3;
var height = 8;

var area = width * height;
console.log('value of area:', area);
console.log('type of area:', typeof area);

var bill = 64;
var payment = 100;
var change = payment - bill;
console.log('value of change:', change);
console.log('typeof change:', typeof change);

var quizzes = 78;
var midterm = 89;
var final = 90;
var grade = (quizzes + midterm + final) / 3;
grade = +grade.toFixed(2);
console.log('value of grade:', grade);
console.log('type of grade:', typeof grade);

var firstName = 'Jenny';
var lastName = 'Tran';
var fullName = firstName + ' ' + lastName;
console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

var pH = 4;
var isAcidic = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

var headCount = 17;
var isSparta = headCount === 300;
console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

var motto = fullName;
motto = fullName + ' is the GOAT';
console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
