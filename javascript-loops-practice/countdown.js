/* exported countdown */
function countdown(number) {
  var numberArray = [];
  while (number >= 0) {
    numberArray.push(number);
    number--;
  }
  return numberArray;
}
