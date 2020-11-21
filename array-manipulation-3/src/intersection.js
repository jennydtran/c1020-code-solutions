/* eslint-disable no-unused-vars */
function intersection(first, second) {
  var newArray = [];
  for (var value of first) {
    if (second.includes(value)) {
      newArray.push(value);
    }
  }
  return newArray;
}
