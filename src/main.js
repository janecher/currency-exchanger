import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { CurrencyService } from './currency-service.js';
import { Currency } from './currency.js';

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    let currencyFrom = $("#currencyFrom").val();
    let currencyTo = $("#currencyTo").val();
    let amount = parseInt($("#amount").val());
    let currency = new Currency(currencyFrom, amount);

    $("#amount").val("");

    (async () => {
      let currencyService = new CurrencyService();
      const response = await currencyService.getConvertionByCurrency(currencyFrom);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('.convertFrom').text(`${currencyFrom} ${amount}`);
        $('.convertTo').text(`${currencyTo} ${currency.exchangeTo(response.conversion_rates[currencyTo])}`);
      } else {
        $('.showHumidity').text(`There was an error handling your request.`);
        $('.showTemp').text(`Please check your inputs and try again!`);
      }
    }
  });
});