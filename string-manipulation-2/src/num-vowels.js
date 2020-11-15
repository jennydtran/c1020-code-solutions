/* eslint-disable no-unused-vars */
function numVowels(string) {
  var newString = string.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vArray = [];
  for (var vowel of vowels) {
    for (var letters of newString) {
      if (vowel === letters) {
        vArray.push(vowel);
      }
    }
  }
  return vArray.length;
}

/* Second solution
function numVowels(string) {
  var newString = string.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vArray = [];
  for (var letters of newString) {
    for (var i = 0; i < vowels.length; i++) {
    if (vowels[i].match(letters)) {
        vArray.push(vowels[i]);
      }
    }
  }
  return vArray.length;
}
*/
