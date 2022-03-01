// Variable
const student = {
  firstName: "0Neokun0",
};

// Getter Property
Object.defineProperty(student, "getName", {
  get: function () {
    return this.firstName;
  },
});

// Setter Property
Object.defineProperty(student, "changeName", {
  set: function (value) {
    this.firstName = value;
  },
});

console.log(student.firstName); // 0Neokun0

// Changing The Property Value
student.changeName = "Nishant";

console.log(student.firstName); // Nishant
