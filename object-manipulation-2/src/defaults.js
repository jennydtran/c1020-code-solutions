/* eslint-disable no-unused-vars */
function defaults(target, source) {
  for (var key in source) {
    // copy all source to target
    // if undefined do copy
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }

  // for (var property in target) {
  //   var include = false;
  //   for (var prop in source) {
  //     if (property === prop || source[prop] === undefined) {
  //       include = true;
  //       break;
  //     }
  //   }
  //   if (!include || target[property] === undefined) {
  //     target[property] = source[property];
  //   }
  // }
  // return target;
}
