import { AgeObj, runTheNumbers } from './../js/age-calculator.js';

$(document).ready(function(){
  $('button#submit-info').click(function(){
    let userBday = $('#input-bday').val();
    let lifeExpectancy = $('#input-life-expectancy').val();
    let ageObj = new AgeObj(userBday, lifeExpectancy);
    runTheNumbers(ageObj);
  });
});
