export class AgeObj {
  constructor(userBday, lifeExpectancy){
    this.userBday = userBday;
    this.lifeExpectancy = lifeExpectancy;
  }
  getAgesOnOtherPlanets(){
    const earthYearSeconds = 31557600;
    let ageInEarthYears = Math.round(this.userAgeSeconds / earthYearSeconds * 100) / 100;
    let ageInMercuryYears = Math.round(ageInEarthYears / 0.24 * 100) / 100;
    let ageInVenusYears = Math.round(ageInEarthYears / 0.62 * 100) / 100;
    let ageInMarsYears = Math.round(ageInEarthYears / 1.88 * 100) / 100;
    let ageInJupiterYears = Math.round(ageInEarthYears / 11.8 * 100) / 100;
    this.ageArray = [ageInEarthYears, ageInMercuryYears, ageInVenusYears, ageInMarsYears, ageInJupiterYears];
    let lifeRemainingEarth = Math.round((this.lifeExpectancy - ageInEarthYears) * 100) / 100;
    let lifeRemainingMercury = Math.round((this.lifeExpectancy / 0.24 - ageInMercuryYears) * 100) / 100;
    let lifeRemainingVenus = Math.round((this.lifeExpectancy / 0.62 - ageInVenusYears) * 100) / 100;
    let lifeRemainingMars = Math.round((this.lifeExpectancy / 1.88 - ageInMarsYears) * 100) / 100;
    let lifeRemainingJupiter = Math.round((this.lifeExpectancy / 11.86 - ageInJupiterYears) * 100) / 100;
    this.lifeRemainingArray = [lifeRemainingEarth, lifeRemainingMercury, lifeRemainingVenus, lifeRemainingMars, lifeRemainingJupiter];
  }
}

export function runTheNumbers(ageObj) {
  if (ageObj.userBday && ageObj.lifeExpectancy) {
    const checkUserBdayRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (checkUserBdayRegex.test(ageObj.userBday)) {
      ageObj.userAgeSeconds = moment().diff(ageObj.userBday, 'seconds');
      if (ageObj.userAgeSeconds > 0) {
        $('#age-in-seconds span').text(ageObj.userAgeSeconds);
        ageObj.getAgesOnOtherPlanets();
        for (let i = 0; i < 5; i++) {
          $('#planet-age-' + i).text(ageObj.ageArray[i]);
          $('#planet-life-remaining-' + i ).text(ageObj.lifeRemainingArray[i]);
          if (ageObj.ageArray[0] > ageObj.lifeExpectancy) {
            ageObj.alertMsg = `Warning! You are over the age expectancy and may die at any moment. Computer recommends sending goodbyes to loved ones ASAP.`;
            $('#life-expectancy-warning').text(ageObj.alertMsg);
          } else {
            $('#life-expectancy-warning').empty();
          }
        }
      } else {
        ageObj.alertMsg = `You can't be born in the future!`;
        alert(ageObj.alertMsg);
      }
    } else {
      ageObj.alertMsg = `Enter your bday in the correct format`;
      alert(ageObj.alertMsg);
    }
  } else {
    ageObj.alertMsg = `Enter your bday first`;
    alert(ageObj.alertMsg);
  }
}
