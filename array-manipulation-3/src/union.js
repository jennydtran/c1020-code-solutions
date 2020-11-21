/* eslint-disable no-unused-vars */
function union(first, second) {
  var newArray = first;
  for (var i = 0; i < second.length; i++) {
    if (!newArray.includes(second[i])) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
