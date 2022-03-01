let numbers = [
  [1, 2],
  [3, 4],
];
numbers.push([5, 6]);

for (const i in numbers) {
  console.log(numbers[i]);
}