import { Currency } from './../src/currency.js';

describe('Currency object', () => {

  let currency;

  beforeEach(function() {
    currency = new Currency("USD", "EUR", 1000);
  });

  test('should return object with Currency properties', () => {
    expect(currency).toMatchObject({
      currencyFrom: "USD",
      currencyTo: "EUR",
      amount: 1000
    });
  });

  test('should exchange amount with coefficient', () => {
    expect(currency.exchangeTo(1, 0.88)).toBe(880);
  });

});