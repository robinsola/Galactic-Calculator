class Age {
  constructor(inputBirth, inputDeath) {
    this.inputBirth = inputBirth;
    this.birthDate = new Date(this.inputBirth);
    this.inputDeath = inputDeath;
    this.currentDate = new Date();
    this.earthAge = 0;
    this.earthSeconds = 0;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
  }

  earthYears() {
    // let birthDate = new Date(this.inputBirth);
    let currentDate = new Date().getFullYear();
    let birthYear = this.birthDate.getFullYear();
    let earthAge = currentDate - birthYear;
    return this.earthAge = earthAge;
  }

  calcSeconds() {
    let earthSeconds = this.earthAge * 31536000;
    return this.earthSeconds = earthSeconds;
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

}

export {Age};
