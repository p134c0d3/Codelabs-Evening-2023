class Person {
	constructor(name, age) {
    this.name = name
    this.age = age
  }
	greet() {
		console.log(
			`Hi there ${this.name}, did you say you were ${this.age} years old?`
		);
	}
  static info() {
    return 'This is a Person class which lists the name and age of the individual you specify';
  }

  get personAge() {
    return this.age;
  }

  set posAge(newAge) {
    if (newAge < 0) {
      console.log("Age can't be less than zero!");
    } else {
      this.age = newAge;
    }
  }
}

const oldAge = new Person('Old Man', 65);
oldAge.posAge = -55;
console.log(oldAge.personAge);

