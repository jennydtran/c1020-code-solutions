/* eslint-disable no-unused-vars */
function reverseWords(string) {
  var newString = string.split(' ');
  for (var i = 0; i < newString.length; i++) {
    newString[i] = newString[i].split('');
    newString[i].reverse();
    newString[i] = newString[i].join('');
  }
  return newString.join(' ');
}
