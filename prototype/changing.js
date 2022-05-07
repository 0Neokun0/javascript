// constructor function
function Person() {
    this.name = 'Nishant'
}

// add a property
Person.prototype.age = 20;

// creating an object
const person1 = new Person();

console.log(person1.age); // 20

// changin the property value of prototype
Person.prototype = { age: 50 }

// creating new onject
const person3 = new Person();

console.log(person3.age); // 50
console.log(person1.age) // 20