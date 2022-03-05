const text = "Java is awesome. Java is fun.";

// passing a string as the first parameter
let pattern = /Java/g;
let new_text = text.replace(pattern, "JavaScript");
console.log(new_text);

const message = "ball bat";

// replace all occurrence of b with c
let result = message.replace('b', 'c');
console.log(result);