/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || typeof balance !== typeof 1) {
    return null;
  }

  var newAccount = new Account(this.nextAccountNumber, holder);
  newAccount.deposit(balance);

  this.accounts.push(newAccount);
  this.nextAccountNumber = this.nextAccountNumber + 1;
  return newAccount.number;

};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i].number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  }

  var totalAssets = 0;

  for (var i = 0; i < this.accounts.length; i++) {
    totalAssets += this.accounts[i].getBalance();
  }

  return totalAssets;
};
