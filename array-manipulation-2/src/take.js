/* eslint-disable no-unused-vars */
function take(array, count) {
  var result = [];
  if (count >= array.length) {
    return [];
  } else {
    for (var i = 0; i < count; i++) {
      result.push(array[i]);
    }
  }
  return result;
}
