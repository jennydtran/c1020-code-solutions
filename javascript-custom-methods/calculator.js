/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var i = numbers.length;
    var sum = 0;
    while (i--) {
      sum += numbers[i];
    }
    return sum;
  },
  getAverage: function (numbers) {
    var i = numbers.length;
    var sum = 0;
    while (i--) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
};
