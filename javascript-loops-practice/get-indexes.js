/* exported getIndexes */
function getIndexes(array) {
  var newArrayWithIndex = [];
  var i;
  for (i = 0; i < array.length; i++) {
    newArrayWithIndex.push(i);
  }
  return newArrayWithIndex;
}
