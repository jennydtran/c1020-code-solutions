/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  var newString = string.split('');
  newString[firstIndex] = string[secondIndex];
  newString[secondIndex] = string[firstIndex];
  return newString.join('');
}
