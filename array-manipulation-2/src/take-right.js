/* eslint-disable no-unused-vars */
function takeRight(array, count) {
  var result = [];
  if (count >= array.length) {
    return [];
  } else {
    for (var i = array.length - count; i < array.length; i++) {
      result.push(array[i]);
    }
  }
  return result;
}
