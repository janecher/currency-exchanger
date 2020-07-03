export class Currency {
  constructor(currencyFrom, currencyTo, amount){
    this.currencyFrom = currencyFrom;
    this.currencyTo = currencyTo;
    this.amount = amount;
  }

  exchangeTo(coefficientToUSD, coefficientFromUSD) {
    return this.amount / coefficientToUSD * coefficientFromUSD;
  }
}