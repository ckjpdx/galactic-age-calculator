import { getAgeSeconds } from './../js/age-calculator.js';
$(document).ready(function(){
  let userAge = 1;
  $('h1').text(getAgeSeconds(userAge));

});
