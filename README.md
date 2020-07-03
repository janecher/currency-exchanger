# Currency Exchanger

##### Currency exchange HTML, CSS, JavaScript(jQuery) application, 07/03/2020

#### By _**Evgeniya Chernaya**_

## Description

Webpage for conversion different currency.

## Specification
| Spec | Input | Output |
| ------------- | ------------- | ------------- |
| User can choose the currency convert from, convert to and amount of money, and see the result | USD, EUR, 100 | USD 100 EUR 88 (depends on current conversion rate)|
| Creare currency object | let currency = new Currency("USD", "EUR", 100) | {currencyFrom: "USD", currencyTo: "EUR", amount: 100} |
| Make an exchange based on conversion rate | 100 USD to EUR, currency.exchangeTo(1, 0.88) | 88 |

## Setup/Installation Requirements

* Clone the repository to your desired directory
* Create .env file in the root directory
* Get an API key:
 * Visit the ExchangeRate-API site. Input your email address and click the "Get Free Key" button.
 * You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
 * At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.
* Insert into .env API_KEY = _{API key you got in the previous steps}_ and save that file
* Do "npm install", then "npm run build" in the terminal
* Do "npm run start" in the terminal to see the result in browser

## Known Bugs

_No known bags_

## Support and contact details

Contact me at _evgenya.chernaya@gmail.com_

## Technologies Used

  * HTML
  * CSS
  * JavaScript
  * JQuery
  * Bootstrap
  * Webpack
  * Jest

### License

_This software is licensed under the MIT license_

Copyright (c) 2020 **Evgeniya Chernaya**