import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { CurrencyService } from './currency-service.js';
import { Currency } from './currency.js';

function createCurrencyOptions(dataObject) {
  if(dataObject) {
    let options = "";
    Object.keys(dataObject.conversion_rates).forEach(element => {
      options+=`<option value="${element}">${element}</option>`;
    });
    $("#currencyFrom").html(options);
    $("#currencyTo").html(options);
  }
}

function getConversionResult(data, currency, currencyFrom, currencyTo, amount) {
  if (data) {
    $('.convertFrom').html(`<p>${currencyFrom} ${amount}</p>`);    
    $('.convertTo').html(`<p>${currencyTo} ${Math.floor(currency.exchangeTo(data.conversion_rates[currencyFrom], data.conversion_rates[currencyTo])*10)/10}</p>`);
  } else {
    $('.error').text(`There was an error handling handling conversion rates request. Please check your inputs and try again!`);
  }
}

$(document).ready(function(){
  let data;
  (async () => {
    const key = "key";
    data = sessionStorage.getItem(key);
    if(data) {
      data = JSON.parse(data);
    } else {
      let currencyService = new CurrencyService();
      data = await currencyService.getConvertionByCurrency("USD");
      sessionStorage.setItem(key, JSON.stringify(data));
    }
    createCurrencyOptions(data);
  })();

  $("form").submit(function(event){
    event.preventDefault();
    let currencyFrom = $("#currencyFrom").val();
    let currencyTo = $("#currencyTo").val();
    let amount = parseInt($("#amount").val());
    let currency = new Currency(currencyFrom, currencyTo, amount);
    $("#amount").val("");

    getConversionResult(data, currency, currencyFrom, currencyTo, amount);
  });
});