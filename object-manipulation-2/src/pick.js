/* eslint-disable no-unused-vars */
function pick(source, keys) {
  var newObject = {};

  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    }
  }

  return newObject;
}
