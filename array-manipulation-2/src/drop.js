/* eslint-disable no-unused-vars */
function drop(array, count) {
  var result = [];
  if (count >= array.length) {
    return [];
  } else {
    for (var i = count; i < array.length; i++) {
      result.push(array[i]);
    }
  }
  return result;
}
