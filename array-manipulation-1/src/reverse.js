/* eslint-disable no-unused-vars */
function reverse(array) {
  var result = [];
  var last = array.length - 1;
  for (var i = last; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}
