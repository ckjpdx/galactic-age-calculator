describe('test user input', function() {

  it('should return a message appropriate to the user input for bday', function() {
    var userBday = '';
    var lifeExpectancy = 80;
    var ageObj = new AgeObj(userBday, lifeExpectancy);
    expect(ageObj.alertMsg).toEqual('Enter your bday first');
  });
});
