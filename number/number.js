const number1 = 4 - 'hello';
console.log(number1); // NaN

const number2 = isNaN(9);
console.log(number2); // false

const number3 = isNaN(4 - 'hello');
console.log(number3); // true

const number4 = 4 - 'hello';
console.log(number4); // NaN
console.log(typeof number4); // "number"

const number5 = 2 / 0;
console.log(number5); // Infinity

const number6 = -2 / 0;
console.log(number6); // -Infinity