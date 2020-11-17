/* eslint-disable no-unused-vars */
function invert(source) {
  var newObject = {};
  for (var prop in source) {
    var value = source[prop];
    newObject[value] = prop;
  }
  return newObject;
}
