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
      const key = "key";
      let data = sessionStorage.getItem(key);
      if(data) {
        data = JSON.parse(data);
      } else {
        let currencyService = new CurrencyService();
        data = await currencyService.getConvertionByCurrency(currencyFrom);
        sessionStorage.setItem(key, JSON.stringify(data));
      }
      getConversionResult(data);
    })();

    function getConversionResult(data) {
      if (data) {
        $('.convertFrom').html(`<p>${currencyFrom} ${amount}</p>`);
        $('.convertTo').html(`<p>${currencyTo} ${Math.floor(currency.exchangeTo(data.conversion_rates[currencyTo])*10)/10}</p>`);
      } else {
        $('.error').text(`There was an error handling your request. Please check your inputs and try again!`);
      }
    }
  });
});