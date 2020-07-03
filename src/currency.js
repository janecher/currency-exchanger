export class Currency {
  constructor(currency, amount){
    this.currency = currency;
    this.amount = amount;
  }

  exchangeTo(coefficient) {
    return this.amount*coefficient;
  }
}