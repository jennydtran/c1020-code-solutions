/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  var newString = string.toLowerCase();
  newString = newString.split(' ');
  for (var i = 0; i < newString.length; i++) {
    newString[i] = newString[i].replace(newString[i][0], newString[i][0].toUpperCase());
  }
  return newString.join(' ');
}
