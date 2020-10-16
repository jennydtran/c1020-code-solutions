/* exported sumAll */
function sumAll(numbers) {
  var sum = 0;
  var i;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
