/* eslint-disable no-unused-vars */
function reverseWord(word) {
  var result = [];
  var last = word.length - 1;
  for (var i = last; i >= 0;) {
    result.push(word[i]);
    i--;
  }
  return result.join('');
}
