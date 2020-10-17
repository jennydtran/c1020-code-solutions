/* eslint-disable no-unused-vars */
function getValues(object) {
  var result = [];
  for (var keys in object) {
    result.push(object[keys]);
  }
  return result;
}
