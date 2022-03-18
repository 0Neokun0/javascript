// Create A Map
const map1 = new Map();
console.log(map1);

// Create A Set
let map2 = new Map();

// Insert Key-Value Pair
map2.set('Intro', {name: 'Nishant', age : 26});
console.log(map2);

// Using forEach method()
let map3 = new Map();
map3.set('name', 'Nishant');
map3.set('age', '26');

// Looping through Map
map3.forEach(function(value, key) {
  console.log(key + '- ' + value)
})
