/* eslint-disable no-unused-vars */
function defaults(target, source) {
  for (var property in target) {
    var include = false;
    for (property in source) {
      if (source[property] === target[property] || source[property] === undefined) {
        include = true;
        break;
      }
    }
    if (!include || target[property] === undefined) {
      target[property] = source[property];
    }
  }
  return target;
}
