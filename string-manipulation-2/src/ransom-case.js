/* eslint-disable no-unused-vars */
function ransomCase(string) {
  var newString = string.toLowerCase();
  newString = newString.split('');
  for (var i = 0; i < newString.length; i++) {
    if (i % 2 === 1) {
      newString[i] = newString[i].toUpperCase();
    }
  }
  return newString.join('');
}
