/* eslint-disable no-unused-vars */
function includes(array, value) {
  for (var i in array) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
