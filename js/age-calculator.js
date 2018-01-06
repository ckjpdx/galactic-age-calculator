export class AgeObj {
  constructor(userBday, lifeExpectancy){
    this.userBday = userBday;
    this.lifeExpectancy = lifeExpectancy;
  }
}

export function getAgeSeconds(ageObj){
  return moment().diff(ageObj.userBday, 'seconds');
}
export function agesOnOtherPlanets(ageObj){
  const earthYearSeconds = 31557600;
  let ageInEarthYears = Math.round(ageObj.userAgeSeconds / earthYearSeconds * 100) / 100;
  let ageInMercuryYears = Math.round(ageInEarthYears / 0.24 * 100) / 100;
  let ageInVenusYears = Math.round(ageInEarthYears / 0.62 * 100) / 100;
  let ageInMarsYears = Math.round(ageInEarthYears / 1.88 * 100) / 100;
  let ageInJupiterYears = Math.round(ageInEarthYears / 11.8 * 100) / 100;
  ageObj.ageArray = [ageInEarthYears, ageInMercuryYears, ageInVenusYears, ageInMarsYears, ageInJupiterYears];
  let lifeRemainingEarth = Math.round((ageObj.lifeExpectancy - ageInEarthYears) * 100) / 100;
  let lifeRemainingMercury = Math.round((ageObj.lifeExpectancy / 0.24 - ageInMercuryYears) * 100) / 100;
  let lifeRemainingVenus = Math.round((ageObj.lifeExpectancy / 0.62 - ageInVenusYears) * 100) / 100;
  let lifeRemainingMars = Math.round((ageObj.lifeExpectancy / 1.88 - ageInMarsYears) * 100) / 100;
  let lifeRemainingJupiter = Math.round((ageObj.lifeExpectancy / 11.86 - ageInJupiterYears) * 100) / 100;
  ageObj.lifeRemainingArray = [lifeRemainingEarth, lifeRemainingMercury, lifeRemainingVenus, lifeRemainingMars, lifeRemainingJupiter];
  return ageObj;
}
