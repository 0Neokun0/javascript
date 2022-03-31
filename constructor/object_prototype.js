// constructor function
function Person () {
    this.name = 'Nishant',
    this.age = 30 // I am acutally 26 in 2022
}

// creating objects
let person1 = new Person();
let person2 = new Person();

// adding new property to constructor function
Person.prototype.gender = 'Male';

console.log(person1.gender); // Male
console.log(person2.gender); // Male