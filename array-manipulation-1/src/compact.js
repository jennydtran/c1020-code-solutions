/* eslint-disable no-unused-vars */
function compact(array) {
  var result = [];
  var truthy = 1 < 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== truthy) {
      return result.push(array[i]);
    }
  }
  return result;
}
