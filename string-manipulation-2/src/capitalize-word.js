/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  newWord = newWord.replace(newWord[0], newWord[0].toUpperCase());
  if (newWord === 'Javascript') {
    newWord = 'JavaScript';
  }
  return newWord;
}
