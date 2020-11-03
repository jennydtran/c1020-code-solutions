/* eslint-disable no-unused-vars */
function isVowel(char) {
  var vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var i in vowel) {
    if (char === vowel[i]) {
      return true;
    }
  }
  return false;
}
