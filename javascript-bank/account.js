/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    var obj = new Transaction('deposit', amount);
    this.transactions.push(obj);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    var obj = new Transaction('withdrawal', amount);
    this.transactions.push(obj);
    return true;
  } else {
    return false;
  }

};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  }

  var sum = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'withdrawal') {
      this.transactions[i].amount = -this.transactions[i].amount;
    }
    sum += this.transactions[i].amount;
  }
  return sum;

};
