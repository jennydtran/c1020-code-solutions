/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  var i;
  var newString = string.replaceAll(' ', '');
  var backwards = newString.length - 1;
  for (i = 0; i < newString.length; i++) {
    if (newString[i] !== newString[backwards]) {
      return false;
    }
    backwards--;
  }
  return true;
}
