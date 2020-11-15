/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  var i;
  for (i = 0; i < string.length; i++) {
    string = string.replace(' ', '');
  }

  var backwards = string.length - 1;
  for (i = 0; i < string.length; i++) {
    if (string[i] === string[backwards]) {
      var match = true;
    } else if (string[i] !== string[backwards]) {
      return false;
    }
    backwards--;
  }
  return match;
}
