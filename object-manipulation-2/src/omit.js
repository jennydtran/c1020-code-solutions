/* eslint-disable no-unused-vars */
function omit(source, keys) {
  var newObject = {};
  for (var prop in source) {
    var includes = false;
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === prop) {
        includes = true;
        break;
      }
    }
    if (!includes) {
      newObject[prop] = source[prop];
    }
  }
  return newObject;
}
