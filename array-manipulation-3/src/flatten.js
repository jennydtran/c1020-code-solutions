/* eslint-disable no-unused-vars */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArray = newArray.concat(array[i]);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
