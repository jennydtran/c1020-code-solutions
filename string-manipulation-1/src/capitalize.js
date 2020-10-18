/* eslint-disable no-unused-vars */
function capitalize(word) {
  var newWord = word.toLowerCase();
  newWord = newWord.replace(newWord[0], newWord[0].toUpperCase());
  return newWord;
}
