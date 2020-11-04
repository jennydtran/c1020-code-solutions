/* exported Transaction */
function Transaction(type, amount) {
  if (amount >= 0 && (type === 'deposit' || type === 'withdrawal')) {
    this.type = type;
    this.amount = amount;
  }
}
