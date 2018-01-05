import { getAgeSeconds } from './../js/age-calculator.js';
$(document).ready(function(){
  let userAge = '1-1-2016';
  $('button#submit-bday').click(function(){
    let userAge = $('#input-bday').val();
    if (userAge) {
      let userAgeSeconds = getAgeSeconds(userAge);
      if (!isNaN(userAgeSeconds)) {
        $('#age-in-seconds span').text(userAgeSeconds);
      } else {
        alert('Enter your bday in the correct format');
      }
    } else {
      alert('Enter your bday first');
    }
  });
});
