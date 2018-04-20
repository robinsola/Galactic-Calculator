class Age {
  constructor(inputDate) {
    this.inputDate = inputDate;
    this.earthAge = 0;
    this.earthSeconds = 0;
  }

  earthYears() {
    let birthDate = new Date(this.inputDate);
    let currentDate = new Date().getFullYear();
    let birthYear = birthDate.getFullYear();
    let earthAge = currentDate - birthYear;
    return this.earthAge = earthAge;
  }

  calcSeconds() {
    let earthSeconds = this.earthAge * 31536000;
    return this.earthSeconds = earthSeconds;
  }
}

export {Age};
