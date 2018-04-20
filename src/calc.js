class Age {
  constructor(inputBirth, lifeExpectAge) {
    this.inputBirth = inputBirth;
    this.lifeExpectAge = lifeExpectAge;
    this.birthDate = new Date(this.inputBirth);
    this.currentDate = new Date();
    this.earthAge = 0;
    this.earthSeconds = 0;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.mercDeathAge = 0;
  }

  earthYears() {
    let currentDate = new Date().getFullYear();
    let birthYear = this.birthDate.getFullYear();
    let earthAge = currentDate - birthYear;
    return this.earthAge = earthAge;
  }
  calcSeconds() {
    let earthSeconds = this.earthAge * 31536000;
    return this.earthSeconds = earthSeconds;
  }
  //is findDiff a more accurate calculation of calcSeconds?
  findDiff() {
    let toTheSecond = (this.currentDate - this.birthDate) / 1000;
    return toTheSecond;
  }

  mercuryYears() {
    let mercuryAge = Math.floor(this.earthAge / .24);
    return this.mercuryAge = mercuryAge;
  }

  venusYears() {
    let venusAge = Math.floor(this.earthAge / .62);
    return this.venusAge = venusAge;
  }

  marsYears() {
    let marsAge = Math.floor(this.earthAge / 1.88);
    return this.marsAge = marsAge;
  }

  jupiterYears() {
    let jupiterAge = Math.floor(this.earthAge / 11.86);
    return this.jupiterAge = jupiterAge;
  }

  mercuryDeath() {
    let mercDeathAge = Math.floor(this.lifeExpectAge / .24);
    return this.mercDeathAge = mercDeathAge;
  }

  yearsPassed() {
    let extraYears = (this.mercuryAge - this.mercDeathAge);
    return extraYears;
  }

}

export {Age};
