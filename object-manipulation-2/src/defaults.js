/* eslint-disable no-unused-vars */
function defaults(target, source) {
  if (source === {}) {
    return target;
  }

  for (var newProp in source) {
    var newValue = source[newProp];
    for (var ogProp in target) {
      var ogValue = target[ogProp];
      if (ogProp !== newProp) {
        target[newProp] = newValue;
      } else if (ogProp === newProp) {
        target.ogProp = ogValue;
      }
    }
  }
  return target;
}
