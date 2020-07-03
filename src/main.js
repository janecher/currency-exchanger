import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { CurrencyService } from './currency-service.js';
import { Currency } from './currency.js';

function createCurrencyTo(dataObject) {
  if(dataObject) {
    let options = "";
    Object.keys(dataObject.conversion_rates).forEach(element => {
      options+=`<option value="${element}">${element}</option>`;
    });
    console.log(options);
    $("#currencyTo").html(options);
  }
}

function getConversionResult(data, currency, currencyFrom, currencyTo, amount) {
  if (data) {
    $('.convertFrom').html(`<p>${currencyFrom} ${amount}</p>`);
    $('.convertTo').html(`<p>${currencyTo} ${Math.floor(currency.exchangeTo(data.conversion_rates[currencyTo])*10)/10}</p>`);
  } else {
    $('.error').text(`There was an error handling your request. Please check your inputs and try again!`);
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
    createCurrencyTo(data);
  })();

  $("form").submit(function(event){
    event.preventDefault();
    if(!data) {
      $('.error').text(`There was an error handling conversion rates request`);
      return;
    }
    let currencyFrom = $("#currencyFrom").val();
    let currencyTo = $("#currencyTo").val();
    let amount = parseInt($("#amount").val());
    let currency = new Currency(currencyFrom, amount);
    $("#amount").val("");

    /*(async () => {
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
    })();*/

    /*function getConversionResult(data) {
      if (data) {
        $('.convertFrom').html(`<p>${currencyFrom} ${amount}</p>`);
        $('.convertTo').html(`<p>${currencyTo} ${Math.floor(currency.exchangeTo(data.conversion_rates[currencyTo])*10)/10}</p>`);
      } else {
        $('.error').text(`There was an error handling your request. Please check your inputs and try again!`);
      }
    }*/

    getConversionResult(data, currency, currencyFrom, currencyTo, amount);
  });
});