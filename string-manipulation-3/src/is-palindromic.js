/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  var i;
  for (i = 0; i < string.length; i++) {
    var newString = string.replace(' ', '');
  }

  var backwards = newString.length - 1;
  for (i = 0; i < newString.length; i++) {
    if (newString[i] !== newString[backwards]) {
      return false;
    } else if (newString[i] === newString[backwards]) {
      var match = true;
    }
    backwards--;
  }
  return match;
}
