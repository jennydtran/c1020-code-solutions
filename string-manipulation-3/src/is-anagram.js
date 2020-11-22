/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {
  firstString = noWhitespace(firstString);
  secondString = noWhitespace(secondString);

  firstString = firstString.split('').sort().join('');
  secondString = secondString.split('').sort().join('');

  return firstString === secondString;

  function noWhitespace(string) {
    return string.replaceAll(' ', '');
  }
}
