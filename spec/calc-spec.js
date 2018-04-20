import { Age } from './../src/calc.js';

describe('Age', function() {
  it('should calculate accurate age in Earth years from user birthdate', function() {
    let age = new Age("03-20-86")
    expect(age.earthYears()).toEqual(32)
  });

})
