import { AgeObj, runTheNumbers } from './../js/age-calculator.js';

describe('test user input', function() {

  it('should return a message appropriate to the user input for bday', function() {
    let userBday = '';
    let lifeExpectancy = 80;
    let ageObj = new AgeObj(userBday, lifeExpectancy);
    runTheNumbers(ageObj);
    expect(ageObj.alertMsg).toEqual('Enter your bday first');
  });
});
