import { getAgeSeconds } from './../js/age-calculator.js';
$(document).ready(function(){
  let userAge = '1-1-2016';
  $('button#submit-bday').click(function(){
    let userAge = $('#input-bday').val();
    $('#age-in-seconds span').text(getAgeSeconds(userAge));
  });

});
