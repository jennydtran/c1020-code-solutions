/* eslint-disable no-unused-vars */
function zip(first, second) {
  var zipped = [];
  var shorter;
  if (first.length < second.length) {
    shorter = first;
  } else {
    shorter = second;
  }

  for (var i = 0; i < shorter.length; i++) {
    zipped.push([first[i], second[i]]);
  }
  return zipped;
}
