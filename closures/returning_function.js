function greet(name) {
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // returning a function
    return displayName;
}

const g1 = greet('Nishant');
console.log(g1); // returns the function definition
g1(); // calling the function