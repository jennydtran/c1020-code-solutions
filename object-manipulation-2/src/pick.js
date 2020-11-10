/* eslint-disable no-unused-vars */
function pick(source, keys) {
  var newObject = {};
  for (var prop in source) {
    if (source[prop] !== undefined) {
      for (var i = 0; i < keys.length; i++) {
        if (keys[i] === prop) {
          newObject[keys[i]] = source[prop];
        }
      }
    }
  }
  return newObject;
}
