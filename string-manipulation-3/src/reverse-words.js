/* eslint-disable no-unused-vars */
function reverseWords(string) {
  var newString = string.split(' ');
  for (var i = 0; i < newString.length; i++) {
    newString[i] = newString[i].split('').reverse().join('');
  }
  return newString.join(' ');
}
