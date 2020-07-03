export class Currency {
  constructor(currencyFrom, currencyTo, amount){
    this.currencyFrom = currencyFrom;
    this.currencyTo = currencyTo;
    this.amount = amount;
  }

  exchangeTo(coefficientToUSD, coefficientFromUSD) {
    if(coefficientToUSD === 0) {
      return this.amount * coefficientFromUSD;
    } else {
      return this.amount / coefficientToUSD * coefficientFromUSD;
    }
  }
}