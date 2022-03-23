// JavaScript Closure Example

// Outer function
function greet() {
    // Variable Defined Outside The Inner Function
    let name = " Nishant ";
    // Inner function
    function displayName() {
        // Accessing Name Variable;
        return 'Hi' + '' + name;
    }

    return displayName;
}
const g1 = greet();
console.log(g1);
console.log(g1())