import { getAgeSeconds, agesOnOtherPlanets } from './../js/age-calculator.js';

$(document).ready(function(){
  let ageObj = {};
  $('button#submit-info').click(function(){
    ageObj.userBday = $('#input-bday').val();
    ageObj.lifeExpectancy = $('#input-life-expectancy').val();
    console.log(ageObj.userBday);console.log(ageObj.lifeExpectancy);
    if (ageObj.userBday && ageObj.lifeExpectancy) {
      ageObj.userAgeSeconds = getAgeSeconds(ageObj);
      console.log(ageObj.userAgeSeconds);
      if (!isNaN(ageObj.userAgeSeconds) && ageObj.userAgeSeconds > 0) {
        $('#age-in-seconds span').text(ageObj.userAgeSeconds);
        ageObj = agesOnOtherPlanets(ageObj);
        console.log(ageObj.ageArray);console.log(ageObj.lifeRemainingArray);
        for (let i = 0; i < 5; i++) {
          console.log(i);console.log(ageObj.ageArray[i]);
          $('#planet-age-' + i).text(ageObj.ageArray[i]);
        }
      } else {
        alert('Enter your bday in the correct format');
      }
    } else {
      alert('Enter your bday first');
    }
  });
});
