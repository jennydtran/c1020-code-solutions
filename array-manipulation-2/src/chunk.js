/* eslint-disable no-unused-vars */
function chunk(array, size) {
  var result = [];
  var subArray = [];
  for (var i = 0; i < array.length; i++) {
    subArray = result[result.length - 1];
    if (!subArray || subArray.length === size) {
      result.push([array[i]]);
    } else {
      subArray.push(array[i]);
    }
  }
  return result;
}
