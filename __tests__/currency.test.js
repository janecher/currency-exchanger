import { Currency } from './../src/currency.js';

describe('Currency object', () => {

  let currency;

  beforeEach(function() {
    currency = new Currency("USD", 1000);
  });

  test('should return object with Currency properties', () => {
    expect(currency).toMatchObject({
      currency: "USD",
      amount: 1000
    });
  });

  test('should exchange amount with coefficient', () => {
    expect(currency.exchangeTo(2)).toBe(2000);
  });

});