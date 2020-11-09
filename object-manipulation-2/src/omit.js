/* eslint-disable no-unused-vars */
function omit(source, keys) {
  var newObject = {};
  var other = {};

  for (var index of keys) {
    for (var prop in source) {
      var value = source[prop];
      if (prop !== index && other === {}) {
        other[prop] = value;
      } else {
        newObject[prop] = value;
      }
    }
  }
  return other;
}
