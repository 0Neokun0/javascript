const person = {
  name: "Nishant",
  age: 26,
  greet: function () {
    let surname = "Meher";
    console.log(`My name is ${this.name} ${surname}`);
  },
};

person.greet();
