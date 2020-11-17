/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  var newString = string.replaceAll(' ', '');
  for (var i = 0, j = newString.length - 1; i < newString.length; i++, j--) {
    if (newString[i] !== newString[j]) {
      return false;
    }
  }
  return true;
}
