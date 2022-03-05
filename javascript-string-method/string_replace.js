const text = "That Which Is Not is What."

// Passing a String as The First Parameter
let pattern = "What";
let new_text = text.replace(pattern, "Shiva");
console.log(new_text);

// Passing a Regex as The First Parameter
pattern = /What/;
new_text = text.replace(pattern, "Shiva");
console.log(new_text);