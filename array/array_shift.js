var languages = [ "JavaScript", "Python", "Java", "C++", "Ruby"];

var shifted = languages.shift();

console.log(languages);
console.log(shifted);

// Shift Returns Any Type Of Object
var numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(numbers.shift);
console.log(numbers);