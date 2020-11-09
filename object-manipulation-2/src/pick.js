/* eslint-disable no-unused-vars */
function pick(source, keys) {
  var newObject = {};
  for (var prop in source) {
    var value = source[prop];
    if (value !== undefined) {
      for (var i = 0; i < keys.length; i++) {
        if (keys[i] === prop) {
          newObject[keys[i]] = value;
        }
      }
    }
  }
  return newObject;
}
