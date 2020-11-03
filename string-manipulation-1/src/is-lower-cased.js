/* eslint-disable no-unused-vars */
function isLowerCased(word) {
  var nonChar = '-';
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase() && word[i] !== nonChar) {
      return false;
    }
  }
  return true;
}
