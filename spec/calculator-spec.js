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
});
