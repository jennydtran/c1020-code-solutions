/* eslint-disable no-unused-vars */
function chunk(array, size) {
  var result = [];
  var subArray = [];
  /*  if (size >= array.length) {
    return [];
  } else { */
  var i = 0;
  for (i; i < array.length + size; i++) {
    for (i = 0; i < size; i++) {
      subArray.push(array[i]);
    }
    result.push(subArray);
  }
  //  }
  return result.push(subArray[i]);
}
/* chunk(['foo', 'bar', 'baz', 'qux'], 2);
// -> [["foo", "bar"], ["baz", "qux"]]
chunk([1, 2, 3, 4, 5], 1);
// -> [[1], [2], [3], [4], [5]]
chunk([false, true, false, true], 3);
// -> [[false, true, false], [true]]
chunk([], 7);
// -> [] */
