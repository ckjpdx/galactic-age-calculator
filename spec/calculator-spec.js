import { AgeObj, runTheNumbers } from './../js/age-calculator.js';

describe('test user input', function() {
  it('should test for an alert to enter bday first when no input was given', function() {
    let userBday = '';
    let lifeExpectancy = 80;
    let ageObj = new AgeObj(userBday, lifeExpectancy);
    runTheNumbers(ageObj);
    expect(ageObj.alertMsg).toEqual('Enter your bday first');
  });
  it('should test for an alert to enter a correct format when incorrect format given', function() {
    let userBday = '555-555';
    let lifeExpectancy = 80;
    let ageObj = new AgeObj(userBday, lifeExpectancy);
    runTheNumbers(ageObj);
    expect(ageObj.alertMsg).toEqual('Enter your bday in the correct format');
  });
  it('should test for an alert that they cant born in the future if a future date was entered', function() {
    let userBday = `01-01-2099`;
    let lifeExpectancy = 80;
    let ageObj = new AgeObj(userBday, lifeExpectancy);
    runTheNumbers(ageObj);
    expect(ageObj.alertMsg).toEqual(`You can't be born in the future!`);
  });
  it('should test for a number in seconds being returned after entering a birth date', function() {
    let userBday = `01-01-1980`;
    let lifeExpectancy = 80;
    let ageObj = new AgeObj(userBday, lifeExpectancy);
    runTheNumbers(ageObj);
    expect(ageObj.userAgeSeconds).toEqual(jasmine.any(Number));
  });
  it(`should test for how many seconds a person has been alive after entering a birth date`, function(){
    let userBday = `01-01-1980`;
    let lifeExpectancy = 80;
    let ageObj = new AgeObj(userBday, lifeExpectancy);
    runTheNumbers(ageObj);
    expect(ageObj.userAgeSeconds).toEqual(moment().diff(ageObj.userBday, 'seconds'));
  });
  it(`should test for a message displayed on the page when a person has outlived their life expectancy`, function(){
    let userBday = `01-01-1920`;
    let lifeExpectancy = 80;
    let ageObj = new AgeObj(userBday, lifeExpectancy);
    runTheNumbers(ageObj);
    expect(ageObj.alertMsg).toEqual(`Warning! You are over the age expectancy and may die at any moment. Computer recommends sending goodbyes to loved ones ASAP.`);
  });
});
