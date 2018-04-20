import { Age } from './../src/calc.js';

describe('Age', function() {
  let age;
  beforeEach(function() {
    age = new Age("03/20/1986", 81)
  });

  it('should calculate accurate age in Earth years from user birthdate', function() {
    expect(age.earthYears()).toEqual(32)
  });

  it('should convert user Earth years to seconds', function() {
    expect(age.earthYears()).toEqual(32)
    expect(age.calcSeconds()).toEqual(1009152000)
  })

  it('should find difference between two dates and return the seconds', function() {
    expect(age.earthYears()).toEqual(32)
    expect(age.findDiff()).toBeGreaterThan(1012565762.389)
  })

  it('should convert user Earth years to Mercury years', function() {
    expect(age.earthYears()).toEqual(32)
    expect(age.mercuryYears()).toEqual(133)
  })

  it('should convert user Earth years to Venus years', function() {
    expect(age.earthYears()).toEqual(32)
    expect(age.venusYears()).toEqual(51)
  })

  it('should convert user Earth years to Mars years', function() {
    expect(age.earthYears()).toEqual(32)
    expect(age.marsYears()).toEqual(17)
  })

  it('should convert user Earth years to Jupiter years', function() {
    expect(age.earthYears()).toEqual(32)
    expect(age.jupiterYears()).toEqual(2)
  })

  it('should convert life expectancy age to Mercury years', function() {
    expect(age.mercuryDeath()).toEqual(337)
  })
})

describe('Age', function() {
  let age;
  beforeEach(function() {
    age = new Age("03/20/1928", 81)
  });

  it('should return years passed from life expectancy on Mercury', function() {
    expect(age.earthYears()).toEqual(90)
    expect(age.mercuryYears()).toEqual(375)
    expect(age.mercuryDeath()).toEqual(38)
  })

  it('should return years passed from life expectancy on Venus', function() {
    expect(age.earthYears()).toEqual(90)
    expect(age.venusYears()).toEqual(145)
    expect(age.venusDeath()).toEqual(15)
  })

  it('should return years passed from life expectancy on Mars', function() {
    expect(age.earthYears()).toEqual(90)
    expect(age.marsYears()).toEqual(47)
    expect(age.marsDeath()).toEqual(4)
  })
})
