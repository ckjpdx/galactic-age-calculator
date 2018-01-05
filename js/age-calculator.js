export function getAgeSeconds(ageObj){
  return moment().diff(ageObj.userBday, 'seconds');
}
export function agesOnOtherPlanets(ageObj){
  const earthYearSeconds = 31557600;
  let ageInEarthYears = ageObj.userAgeSeconds / earthYearSeconds;
  let ageInMercuryYears = ageInEarthYears * 0.24;
  let ageInVenusYears = ageInEarthYears * 0.62;
  let ageInMarsYears = ageInEarthYears * 1.88;
  let ageInJupiterYears = ageInEarthYears * 11.86;
  ageObj.ageArray = [ageInEarthYears, ageInMercuryYears, ageInVenusYears, ageInMarsYears, ageInJupiterYears];
  let lifeRemainingEarth = ageObj.lifeExpectancy - ageInEarthYears;
  let lifeRemainingMercury = ageObj.lifeExpectancy * 0.24 - ageInMercuryYears;
  let lifeRemainingVenus = ageObj.lifeExpectancy * 0.62 - ageInVenusYears;
  let lifeRemainingMars = ageObj.lifeExpectancy * 1.88 - ageInMarsYears;
  let lifeRemainingJupiter = ageObj.lifeExpectancy * 11.86 - ageInJupiterYears;
  ageObj.lifeRemainingArray = [lifeRemainingEarth, lifeRemainingMercury, lifeRemainingVenus, lifeRemainingMars, lifeRemainingJupiter];
  return ageObj;
}
